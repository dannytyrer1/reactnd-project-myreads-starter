import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import BookList from './ListBooks'

class SearchPage extends Component {
  state = {books: []}

  updateServer = (book, fromShelf, toShelf) => {
    BooksAPI.update(book, toShelf)
  }

  onSearchBarChange = (query) => {
    if (query === "")
    {
      this.setState({books: []})
    }
    else
    {
       BooksAPI.search(query, 20).then((bookList) => {
           BooksAPI.getAll().then((retBookList) => {
              let bookHash = {}
              retBookList.map((retBook) => {
                  bookHash[retBook.id] = retBook.shelf
                  return ""
              })
              if (Array.isArray(bookList))
              {
                 bookList = bookList.map((book) => {
                    if (typeof bookHash[book.id] !== typeof undefined)
                    {
                       book.shelf = bookHash[book.id]
                    }
                    else
                    {
                       book.shelf = "none"
                    }
                    return book;
                 })
              }
              else
              {
                 bookList = []
              }
              this.setState({books: bookList})
           })
       })
    }
  }

  render() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
               <Link className="close-search" to="/">Close</Link>
               <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={(event) => this.onSearchBarChange(event.target.value)} />
               </div>
            </div>
            <div className="search-books-results">
               <BookList
                   books={this.state.books}
                   title=""
                   onShelfMove={this.updateServer}
               />
            </div>
        </div>
     )
  }
}
export default SearchPage

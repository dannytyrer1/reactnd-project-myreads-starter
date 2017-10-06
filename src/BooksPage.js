import React, {Component} from 'react';
import BookList from './ListBooks';
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

class BookPage extends Component {
  state = { read: [],
            currentlyReading: [],
            wantToRead: []}

  componentDidMount () {
      BooksAPI.getAll().then((books) => {
        this.setState({
          read: books.filter((c) => c.shelf === "read"),
          currentlyReading: books.filter((c) => c.shelf === "currentlyReading"),
          wantToRead: books.filter((c) => c.shelf === "wantToRead")}
         )
      })
    }

  onShelfMove = (book, fromShelf, toShelf) => {
      BooksAPI.update(book, toShelf);
      let state = this.state
      book.shelf = toShelf
      state[fromShelf] = this.state[fromShelf].filter((c) => c.title !== book.title)
      if (toShelf !== "none")
      {
        state[toShelf] = this.state[toShelf].concat([book])
      }
      this.setState(state);
  }

  render() {
      return (
         <div>
            <BookList
               books={this.state.currentlyReading}
               title="Currently Reading"
               onShelfMove={this.onShelfMove}
             />
            <BookList
               books={this.state.wantToRead}
               title="Want to Read"
               onShelfMove={this.onShelfMove}
            />
            <BookList
               books={this.state.read}
               title="Read"
               onShelfMove={this.onShelfMove}
             />
            <div className="open-search">
               <Link to="/create">Add a book</Link>
            </div>
        </div>
      )
   }
}
export default BookPage

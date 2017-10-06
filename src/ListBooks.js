import React, {Component} from 'react'
import Book from './Book'
class BookList extends Component {
    render () {
      return (
        <div>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        {this.props.books.map((bookVar) =>
           <Book
              book={bookVar}
              onShelfMove={this.props.onShelfMove}
           />
        )}
        </ol>
      </div>
      </div>
    )
    }
}
export default BookList

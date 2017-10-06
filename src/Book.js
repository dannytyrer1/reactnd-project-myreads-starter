import React, {Component} from 'react'
class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
           <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id='+this.props.book.id+'&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
           <div className="book-shelf-changer">
              <select defaultValue={this.props.book.shelf} onChange={(event) => this.props.onShelfMove(this.props.book, this.props.book.shelf, event.target.value )}>
                 <option value="moveTo" disabled>Move to...</option>
                 <option value="currentlyReading">Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
              </select>
          </div>
        </div>
      </div>
    )
  }
}
export default Book

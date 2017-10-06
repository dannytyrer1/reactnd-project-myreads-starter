import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import BookPage from './BooksPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends Component {
    render () {
      return (
        <div className="app">
            <Route path="/create" render={ () => (
                <SearchPage/>
            )}/>
            <Route exact path="/" render={ () => (
                <BookPage/>
            )}/>
        </div>
      )
    }
}
export default BooksApp

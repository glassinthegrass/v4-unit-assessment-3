import React, {Component} from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (title) => {
    if(this.state.shelf.includes(title) !== true) {
      let newShelf = this.state.shelf
      newShelf.push(title)
      this.setState({shelf: newShelf})
      console.log(this.state.shelf)
    }
  }

  clearShelf = () => {
    this.setState({shelf: []})
  }

  filterBooks = (input) => {
    let filteredBooks = this.state.books.filter(elem => (elem.title.toLowerCase().includes(input.toLowerCase()) || elem.author.toLowerCase().includes(input.toLowerCase())))
    this.setState({books: filteredBooks})
  }

  reset = () => {
    this.setState({books: data})
  }

  render() {
    return (
      <section className="App">
        <Header/>
        <section className="main-section">
          <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
          <div className="list-shelf">
            <BookList books={this.state.books} addToShelf={this.addToShelf}/>
            <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
          </div>
        </section>
  
      </section>
    )
  }
}
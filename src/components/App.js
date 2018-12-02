import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import books from '../mocks/books'
import Footer from './Footer'
import About from './About'
import BooksList from './BooksList'
import Navbar from './Navigations/Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      books: books,
      selectedFilter: 'All',
      menu: { open: false }
    }
  }

  toggleMenu = () => {
    this.setState({ menu: { open: !this.state.menu.open } })
  }

  selectFilter = filter => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === 'All'
          ? books
          : books.filter(book => book.category === filter)
    })
  }

  render() {
    const filters = ['All', 'Web', 'Mobile', 'DevOps', 'Essentials']

    const tabItems = filters.map(filter => (
      <li
        className={filter === this.state.selectedFilter ? 'active' : ''}
        key={filter}
        onClick={() => this.selectFilter(filter)}
      >
        <a href="#0">{filter}</a>
      </li>
    ))

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />
        <Navbar toggleMenu={this.toggleMenu} />
        <Header title="ReactJS Academy" />
        <BooksList tabItems={tabItems} books={this.state.books} />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App

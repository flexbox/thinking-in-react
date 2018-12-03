import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Books from './Books/Books'
import Navbar from './Navigations/Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: { open: false }
    }
  }

  toggleMenu = () => {
    this.setState(state => ({ menu: { open: !state.menu.open } }))
  }

  render() {
    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />
        <Navbar toggleMenu={this.toggleMenu} />
        <Header title="ReactJS Academy" />
        <Books />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App

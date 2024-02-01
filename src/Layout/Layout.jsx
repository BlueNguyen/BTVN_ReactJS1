import React, { Component } from 'react'
import Header from './Navbar'
import Banner from './Banner'
import Item from './Content'
import Footer from './Footer'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Item/>
        <Footer/>
      </div>
    )
  }
}

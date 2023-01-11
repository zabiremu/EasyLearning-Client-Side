import React, { Component, Fragment } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'

export default class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Contact Us" />
        <TopPage title="Contact Us" />
        <Contact/>
        <Footer/>
      </Fragment>
    )
  }
}

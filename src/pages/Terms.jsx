import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TermsAndCoditation from '../components/TermAndConditation/TermsAndCoditation'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'

export default class Terms extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms and Conditation"/>
        <TopPage title="Terms and Conditation" />
        <TermsAndCoditation/>
        <Footer/>
      </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'
import RefundDescription from '../components/RefundDescription/RefundDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'
import Footer from '../components/Footer/Footer'
export default class Refund extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Policy"/>
        <TopPage title="Refund Policy"/>
        <RefundDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

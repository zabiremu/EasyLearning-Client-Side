import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PrivacyAndPolicy from '../components/PrivacyAndPolicy/PrivacyAndPolicy'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'

export default class Privacy extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Privacy And Policy"/>
        <TopPage title="Privacy And Policy"/>
        <PrivacyAndPolicy/>
        <Footer/>
      </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'
import CoursesDetails from '../components/CourseDetails/CoursesDetails'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'

export default class CourseDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Courese Details"/>
        <TopPage title="Courese Details"/>
        <CoursesDetails/>
        <Footer/>
      </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'
import AllCourses from '../components/AllCourses/AllCourses'
export default class AllCoursesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <TopPage title="All Courses"/>
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}

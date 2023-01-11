import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'
import AllCourses from '../components/AllCourses/AllCourses'
export default class AllCoursesPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="All Courses"/>
        <TopPage title="All Courses"/>
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}

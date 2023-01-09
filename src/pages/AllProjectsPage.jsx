import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'

export default class AllProjectsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <TopPage title="All Projects"/>
        <AllProjects/>
        <Footer/>
      </Fragment>
    )
  }
}

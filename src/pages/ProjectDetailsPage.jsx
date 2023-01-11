import React, { Component, Fragment } from 'react'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'
import Footer from '../components/Footer/Footer'
export default class ProjectDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Project Details"/>
        <TopPage title="Project Details"/>
        <ProjectDetails/>
        <Footer/>
      </Fragment>
    )
  }
}

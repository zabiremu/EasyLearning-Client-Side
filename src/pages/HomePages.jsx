import React, { Component, Fragment } from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProjects/RecentProject";
import Courses from "../components/Courses/Courses";
import Videos from "../components/Videos/Videos";
import Review from "../components/ClientReview/Review";
import AboutMe from "../components/AboutMe.jsx/AboutMe";
import Footer from "../components/Footer/Footer";

export default class HomePages extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Home"/>
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Courses />
        <Videos />
        <Review />
        <AboutMe />
        <Footer />
      </Fragment>
    );
  }
}

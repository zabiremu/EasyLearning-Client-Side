import React, { Component, Fragment } from "react";
import AllServices from "../components/AllSerivces/AllServices";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";

export default class AllServicesPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Services"/>
        <TopPage title="Our Services" />
        <AllServices />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

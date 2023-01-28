import React, { Component, Fragment } from "react";
import AboutMe from "../components/AboutMe.jsx/AboutMe";
import AboutPageDesc from "../components/aboutPageDescription/AboutPageDesc";
import Footer from "../components/Footer/Footer";
import LoadIcon from "../components/LoadIcon/loadIcon";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";

export default class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    this.setState({
      loading: false,
    });
  }
  render() {
    if (this.state.loading == true) {
      return <LoadIcon />;
    } else {
      return (
        <Fragment>
          <TopNavigation title="About Us" />
          <TopPage title="About Us" />
          <AboutMe />
          <AboutPageDesc />
          <Footer />
        </Fragment>
      );
    }
  }
}

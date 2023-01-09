import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "../pages/HomePages"
import AboutPage from "../pages/AboutPage"
import AllCoursesPage from "../pages/AllCoursesPage"
import AllProjectsPage from "../pages/AllProjectsPage"
import AllServicesPage from "../pages/AllServicesPage"
import ContactPage from "../pages/ContactPage"
class AppRouter extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
            <Route exact path="/" element={<HomePages />} />
            <Route exact path="/About" element={<AboutPage />} />
            <Route exact path="/All-Courses" element={<AllCoursesPage />} />
            <Route exact path="/All-Projects" element={<AllProjectsPage />} />
            <Route exact path="/All-Services" element={<AllServicesPage />} />
            <Route exact path="/Contact-With-Us" element={<ContactPage />} />
          </Routes>
      </Fragment>
    );
  }
}

export default AppRouter;

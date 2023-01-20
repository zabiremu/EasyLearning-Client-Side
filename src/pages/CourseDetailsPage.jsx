import React, { Fragment, useState, useEffect } from "react";
import CoursesDetails from "../components/CourseDetails/CoursesDetails";
import Footer from "../components/Footer/Footer";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";
import { useParams } from "react-router-dom";
import AppUrl from "../RestApi/AppUrl";
import RestClient from "../RestApi/RestClient";

export default function CourseDetailsPage() {
  const param = useParams();
  const { courseID } = param;

  const [courseDt, setCourseDt] = useState({
    c_name: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
    RestClient.getRequest(AppUrl.courseDetails + courseID).then((result) => {
      setCourseDt({ c_name: result["long_title"] });
    });
  },[]);
  return (
    <Fragment>
      <TopNavigation title="Courese Details" />
      <TopPage title={courseDt.c_name} />
      <CoursesDetails />
      <Footer />
    </Fragment>
  );
}

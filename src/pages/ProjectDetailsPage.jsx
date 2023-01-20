import React, { Fragment, useState, useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopPage from "../components/TopPage/TopPage";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import AppUrl from "../RestApi/AppUrl";
import RestClient from "../RestApi/RestClient";

export default function ProjectDetailsPage() {
  let params = useParams();
  let { projectID } = params;

  const [projectName, setProjectName] = useState({
    project_name: "",
  });
  useEffect(() => {
    window.scroll(0,0)
    RestClient.getRequest(AppUrl.projectsDetails + projectID).then((result) => {
      console.log(result)
      setProjectName({ project_name: result["project_name"] });
    });
  }, []);
  return (
    <Fragment>
      <TopNavigation title="Project Details" />
      <TopPage title={projectName.project_name} />
      <ProjectDetails />
      <Footer />
    </Fragment>
  );
}

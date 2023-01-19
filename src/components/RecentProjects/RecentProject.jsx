import React, { Component, Fragment } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import project1 from '../../assets/image/page1.png'
import project2 from '../../assets/image/page2.png'
import project3 from '../../assets/image/page3.png'
import { NavLink } from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";

export default class RecentProject extends Component {
  constructor(){
    super();
    this.state={
      AllData: [],
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.homePageProjects).then(result=>{
      this.setState({AllData:result})
    })
  }
  render() {
    const style = {
      textDecoration: 'none',
      color: '#fff',
    }
    const DataList = this.state.AllData;
    const showData = DataList.map(result=>{
        return <Col lg={4} md={6} sm={6}>
        <div className="project-card p-3">
          <Card>
            <Card.Img variant="top" src={result.image_one} />
            <Card.Body>
              <Card.Title className="Service-name">{result.project_name} </Card.Title>
              <Card.Text className="service-desc">
              {result.project_description} 
              </Card.Text>
              <Button variant="primary"><NavLink to={"/project-details/"+result.id} style={style}> Visit Site</NavLink></Button>
            </Card.Body>
          </Card>
        </div>
      </Col>
    })
    
    return (
      <Fragment>
        <Container className="Recent_projects text-center">
          <h1 className="service_title text-center">Recent Projects</h1>
          <div className="bottom"></div>
          <Row>
            {showData}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

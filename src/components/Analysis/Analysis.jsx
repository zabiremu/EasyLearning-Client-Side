import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import parse from 'html-react-parser';

export default class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      techDesc: "...",
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.chartData).then((result) => {
      this.setState({ data: result });
    });
    RestClient.getRequest(AppUrl.Toptech).then((result) => {
      this.setState({ techDesc: result[0]["tech_description"] });
    });
  }
  render() {
    const style = {
      textAlign: "justify",
    }
    return (
      <Fragment>
        <Container className="service">
          <h1 className="service_title text-center">Technolgy Used</h1>
          <div className="bottom"></div>
          <Row className="mx-auto">
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="project" fill="#051b35" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div>
                <p className="text-justify service-desc" style={style}>
                {parse(this.state.techDesc)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

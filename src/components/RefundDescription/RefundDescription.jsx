import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class RefundDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12} className="mt-5">
              <h4 className="Service-name">
                Eligibility for Refunds and Exchanges
              </h4>
              <hr />
              <p className="service-desc">
                <ul>
                  <li>
                    Your item must be unused and in the same condition that you
                    received it.
                  </li>
                  <li>The item must be in the original packaging.</li>
                  <li>
                    To complete your return, we require a receipt or proof of
                    purchase.
                  </li>
                  <li>
                    Your item must be unused and in the same condition that you
                    received it.
                  </li>
                  <li>The item must be in the original packaging.</li>
                  <li>
                    To complete your return, we require a receipt or proof of
                    purchase.
                  </li>
                </ul>
              </p>
              <h4 className="Service-name pt-3">
                Partial refunds are granted (if applicable)
              </h4>
              <hr />
              <p className="service-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
                <br />
                <br />
                Provident similique accusantium nemo autem. Veritatis obcaecati
                tenetur iure eius earum ut molestias architecto voluptate
                aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
                sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
                fuga? Ipsa laudantium molestias eos sapiente officiis modi at
                sunt excepturi expedita sint?
                <br />
                <br />
                Sed quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

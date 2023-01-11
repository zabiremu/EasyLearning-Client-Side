import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image from "../../assets/image/brainstorm-meeting.jpg"

export default class CoursesDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row className='mt-5'>
                <Col lg="8" md="6" sm="6">
                    <h2 className='pb-3 p-details-title'>Fox Nymphs Grab Quick-jived Waltz.</h2>
                    <img src={image} alt=""  className='pb-3'/>
                    <p className='p-details-para'>
                    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy<br/><br/> fowl quack.
                     Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking<br/><br/> zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
                    </p>
                </Col>
                <Col lg="4" md="6" sm="6">
                <div class="widget widget_feature mt-4">
                            <h4 class="widget-title">Course Features</h4>                                 
                            <ul>
                                <li><i class="fa fa-user"></i><span>Enrolled :</span> 1200 students</li>
                                <li><i class="fa fa-clock-o"></i><span>Duration :</span> 2 hours</li>
                                <li><i class="fa fa-clipboard"></i><span>Lectures :</span> 8</li>
                                <li><i class="fa fa-clone"></i><span>Categories:</span> Technology</li>
                                <li><i class="fa fa-tags"></i><span>Tags:</span> Android, JavaScript</li>
                                <li><i class="fa fa-clipboard"></i><span>Instructor:</span> Ethan Dean</li>
                            </ul>
                            <div class="price-wrap text-center">
                                <h5>Price:<span>$54.00</span></h5>
                                <Button className="w-100 h-100"
                                 variant="warning">ENROLL COURSE</Button>{' '}
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

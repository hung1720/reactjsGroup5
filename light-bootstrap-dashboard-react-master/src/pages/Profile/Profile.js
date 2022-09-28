import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardText,
  CardBody,
  CardImage,
  Btn,
  Progress,
  ProgressBar,
  Icon,
  ListGroup,
  ListGroupItem
} from 'mdb-react-ui-kit';

function Profile() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        <Row>
          <Col>
           {/* ///head/ */}
          </Col>
        </Row>

        <Row>
          <Col lg="4">
            <Card className="mb-4">
              <CardBody className="text-center">
                <CardImage
                  src="https://znews-photo.zingcdn.me/w660/Uploaded/neg_yslewlx/2022_09_23/rs_1200x1200_220922081746_1200_J_1.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">VN</p>
                <div className="d-flex justify-content-center mb-2">
                  <Btn>Follow</Btn>
                  <Btn>MESSAGE</Btn>
                </div>
              </CardBody>
            </Card>

            <Card className="mb-4 mb-lg-0">
              <CardBody className="p-0">
                <ListGroup flush className="rounded-3">
                  <ListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <Icon fas icon="globe fa-lg text-warning" />
                    <CardText>khang.com</CardText>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <Icon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <CardText>khang</CardText>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <Icon fab icon="fa-solid fa-envelope" style={{ color: '#55acee' }} />
                    <CardText></CardText>
                  </ListGroupItem>          
                  <ListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <Icon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <CardText>HKhang</CardText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="mb-4">
              <CardBody>
                <Row>
                  <Col sm="3">
                    <CardText>Full Name</CardText>
                  </Col>
                  <Col sm="9">
                    <CardText className="text-muted">khang</CardText>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <CardText>Email</CardText>
                  </Col>
                  <Col sm="9">
                    <CardText className="text-muted">khang@gmail.com</CardText>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <CardText>Phone</CardText>
                  </Col>
                  <Col sm="9">
                    <CardText className="text-muted">0123456789</CardText>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <CardText>Job</CardText>
                  </Col>
                  <Col sm="9">
                    <CardText className="text-muted">Professor</CardText>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <CardText>Address</CardText>
                  </Col>
                  <Col sm="9">
                    <CardText className="text-muted">nguyen Van Linh</CardText>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Row>
              <Col md="6">
                <Card className="mb-4 mb-md-0">
                  <CardBody>
                    <CardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</CardText>
                    <CardText className="mb-1" style={{ fontSize: '.77rem' }}>PE </CardText>
                    <Progress className="rounded">
                      <ProgressBar width={80} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}> JAVA</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={72} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>C#</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={89} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>C++</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={55} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>BE API</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={66} valuemin={0} valuemax={100} />
                    </Progress>
                  </CardBody>
                </Card>
              </Col>

              <Col md="6">
                <Card className="mb-4 mb-md-0">
                  <CardBody>
                    <CardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</CardText>
                    <CardText className="mb-1" style={{ fontSize: '.77rem' }}></CardText>
                    <Progress className="rounded">
                      <ProgressBar width={80} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>GAME DEVELOP</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={72} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>MB</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={89} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>TESTER</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={55} valuemin={0} valuemax={100} />
                    </Progress>

                    <CardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>JS</CardText>
                    <Progress className="rounded">
                      <ProgressBar width={66} valuemin={0} valuemax={100} />
                    </Progress>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Profile;

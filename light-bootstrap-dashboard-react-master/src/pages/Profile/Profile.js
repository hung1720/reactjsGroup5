import React, { useState } from "react";
import Select from 'react-select';
import { Zoom } from 'react-slideshow-image';
// import makeAnimated from 'react-select/animated';
// import { colourOptions } from './docs/data';


import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";
// const animatedComponents = makeAnimated();
const skill = [
  { label: "Python", value: 355 },
  { label: "Ruby ", value: 54 },
  { label: "Pascal", value: 43 },
  { label: "C", value: 61 },
  { label: "C#", value: 965 },
  { label: "C++", value: 46 },
  { label: "Objective-C", value: 58 },
  { label: "Java", value: 58 },
  { label: "JavaCript", value: 58 },
  { label: "Swift", value: 58 },
];


const job = [
  { label: "Computer Science", value: 355 },
  { label: "Information Technology ", value: 54 },
  { label: "Data Communication and Computer Network", value: 43 },
  { label: "Computer Engineering", value: 61 },
  { label: "Network Technology", value: 965 },
  { label: "Software Engineering", value: 46 },
  { label: "Management Information Systems", value: 58 },
  { label: "Big Data & Machine Learning", value: 58 },
  { label: "Game", value: 58 },
  { label: "Graphic", value: 58 },
  { label: "Multimedia Design", value: 58 },
];
const images = [
  'images/new_logo.png',
  'images/modal.jpg',
  'images/sidebar-4.jpg',
  'images/sidebar-3.jpg',
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

function Profile() {


  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }

//   const handleForm = (e) => {
//     e.preventDefault();
//     fetch('https://633d63337e19b178290d5d5b.mockapi.io/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
//   }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control value={username}
                          defaultValue="Kh"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control value={email}
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control value={firstname}
                          defaultValue="KHan"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control value={lastname}
                          defaultValue="HUng"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Skill</label>
                        {/* <Select options={job} isMulti /> */}
                        <Select value={skill}
                          label={skill.filter(obj => selectedValue.includes(obj.label))}
                          options={skill} is isMulti
                          onChange={handleChange}
                        />
                        {console.log(skill)}
                      </Form.Group>
                    </Col>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control value={address}
                          defaultValue="15 Nguyeh Van linh, Q9"
                          placeholder="Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Job</label>
                        {/* <Select options={skill} isMulti /> */}
                        <Select value={job}
                          label={job.filter(obj => selectedValue.includes(obj.label))}
                          options={job} is isMulti
                          onChange={handleChange}
                        />
                        {console.log(JSON.stringify(selectedValue, null, 2))}
                        {/* <Form.Control defaultValue="15 Nguyeh Van linh, Q9" placeholder="Skill" type="text">
                        </Form.Control> */}

                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control value={city}
                          defaultValue="KHan"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control value={country}
                          defaultValue="HCM"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control value={code}
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control value={about}
                          cols="80"
                          defaultValue="Tui la thay giao day cac mon hojc."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleForm}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/avata.jpg")}
                    ></img>
                    <h5 className="title">HUng KHan</h5>
                  </a>
                  <p className="description">KHan</p>
                </div>
                <p className="description text-center">
                  "Toi la thay giao <br></br>
                  dink cua dink <br></br>
                  top cua top"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
            <Card className="card-user">
              <Zoom {...zoomOutProperties}>
                {
                  images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                }
              </Zoom>
              <Button
                className="btn-fill pull-right"
                type="submit"
                variant="info"
              >
                Update Images
              </Button>
              <hr></hr>
            </Card>
          </Col>

        </Row>

      </Container>
    </>
  );
}

export default Profile;
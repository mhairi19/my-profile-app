import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="mb-5 align-items-center">
        <Col md={12} className="text-center">
          <h2 className="fw-bold display-5">About <span className="text-orange">Me</span></h2>
          <div className="title-underline mx-auto"></div>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Personal Details Card */}
        <Col md={5}>
          <Card className="h-100 border-0 shadow-sm text-center p-4 card-hover">
            <Card.Body>
              <div className="icon-box mb-3">🎂</div>
              <h4 className="fw-bold">Mary Mae L. Frisco</h4>
              <p className="text-muted">Born September 19, 2004</p>
              <hr />
              <p className="fst-italic text-secondary">
                "Do what you can, with what you have, where you are."
              </p>
              <Badge bg="orange-light" className="text-orange px-3 py-2 mt-2">
                Designer & Athlete
              </Badge>
            </Card.Body>
          </Card>
        </Col>

        {/* Background & Hobby Card */}
        <Col md={7}>
          <Card className="h-100 border-0 shadow-sm p-4 card-hover border-start-orange">
            <Card.Body>
              <h5 className="fw-bold mb-3">Background & Experience</h5>
              <p className="text-secondary">
                I am a student and aspiring designer focused on UI/UX and Product Design. 
                My education has provided me with a solid foundation in React.js and 
                modern web technologies.
              </p>
              
              <h5 className="fw-bold mt-4 mb-3">My Passion</h5>
              <p className="text-secondary">
                Beyond my career goals, my favorite hobby is <strong>playing sports</strong>. 
                I believe the discipline and teamwork required in athletics directly 
                translate to my professional work ethic and collaboration style.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
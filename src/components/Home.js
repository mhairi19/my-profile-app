import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// 1. Import your image from the assets folder
import profileImg from '../assets/profile.jpg'; 

const Home = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-muted mb-1">Hello, I'm</p>
            {/* Using your profile name and nickname */}
            <h4 className="text-orange fw-bold">Mary Mae L. Frisco </h4>
            <h1 className="display-4 fw-bold my-3">UI/UX and Product Designer</h1>
            <p className="text-secondary mb-4">
              Welcome to My Profile! My career goal is to bridge the gap between technology 
              and human needs through intuitive design. I strive to do what I can, with 
              what I have, where I am. {/* Using your personal motto */}
            </p>
            <div className="d-flex gap-3">
              <Button variant="orange" className="custom-btn">Hire Me →</Button>
              <Button variant="outline-secondary" className="custom-btn">Download CV</Button>
            </div>
          </Col>
          <Col md={6} className="text-center position-relative">
            <div className="profile-circle-bg">
              {/* 2. Replace the placeholder URL with the imported variable */}
              <img 
                src={profileImg} 
                alt="Mary Mae L. Frisco" 
                className="img-fluid rounded-circle profile-img" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
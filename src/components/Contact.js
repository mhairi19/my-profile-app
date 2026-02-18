import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (submitted) {
    return (
      <Container className="my-5 py-5 text-center">
        <Card className="p-5 border-0 shadow-lg success-card mx-auto" style={{ maxWidth: '600px' }}>
          <div className="display-1 text-orange mb-3">✉</div>
          <h2 className="fw-bold">Thank you, {formData.name}!</h2>
          <p className="lead text-secondary">Your message has been successfully sent.</p>
          <div className="text-start bg-light p-4 rounded my-4">
            <p className="mb-1"><strong>Email:</strong> {formData.email}</p>
            <p className="mb-0"><strong>Message:</strong> {formData.message}</p>
          </div>
          <Button variant="orange" className="custom-btn px-5" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="my-5 py-5">
      <Row className="g-5">
        {/* Left Column: Contact Info */}
        <Col lg={5}>
          <h2 className="fw-bold mb-4">Let's <span className="text-orange">Connect</span></h2>
          <p className="text-secondary mb-5">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>
          
          <div className="contact-info-item d-flex mb-4">
            <div className="info-icon text-orange me-3">📍</div>
            <div>
              <h6 className="fw-bold mb-0">Location</h6>
              <p className="text-muted">Biñan, Calabarzon, Philippines</p>
            </div>
          </div>

          <div className="contact-info-item d-flex mb-4">
            <div className="info-icon text-orange me-3">📞</div>
            <div>
              <h6 className="fw-bold mb-0">Phone</h6>
              <p className="text-muted">09397629508</p>
            </div>
          </div>

          <div className="social-links d-flex gap-3 mt-5">
            <div className="social-circle">in</div>
            <div className="social-circle">f</div>
            <div className="social-circle">𝕩</div>
          </div>
        </Col>

        {/* Right Column: The Form */}
        <Col lg={7}>
          <Card className="border-0 shadow-lg p-4 rounded-4">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-4" controlId="name">
                    <Form.Label className="small fw-bold text-uppercase text-muted">Full Name</Form.Label>
                    <Form.Control 
                      className="form-input-custom" 
                      type="text" 
                      placeholder="e.g. Mary Mae L. Frisco" 
                      required 
                      onChange={handleChange} 
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Label className="small fw-bold text-uppercase text-muted">Email Address</Form.Label>
                    <Form.Control 
                      className="form-input-custom" 
                      type="email" 
                      placeholder="name@example.com" 
                      required 
                      onChange={handleChange} 
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label className="small fw-bold text-uppercase text-muted">How can I help?</Form.Label>
                    <Form.Control 
                      className="form-input-custom" 
                      as="textarea" 
                      rows={5} 
                      placeholder="Tell me about your project..." 
                      required 
                      onChange={handleChange} 
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="orange" type="submit" className="custom-btn w-100 py-3 fw-bold">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
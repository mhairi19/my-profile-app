import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  const categories = [
    { name: "Frontend", items: ["JavaScript", "React.js", "CSS & Bootstrap"] },
    { name: "Design", items: ["UI/UX Design", "Product Design"] }
  ];

  return (
    <Container className="my-5 py-5 overflow-hidden">
      <Row className="align-items-center">
        {/* Large Vertical Text Branding */}
        <Col lg={2} className="d-none d-lg-block">
          <h1 className="vertical-text text-uppercase text-outline">Skills</h1>
        </Col>

        {/* Floating Skills Cloud */}
        <Col lg={10}>
          <div className="ps-lg-5">
            <h2 className="fw-black display-3 mb-2">Technical <span className="text-orange">Stack</span></h2>
            <p className="text-secondary mb-5">Tools I use to bring ideas to life.</p>

            {categories.map((cat, idx) => (
              <div key={idx} className="mb-5">
                <h5 className="fw-bold text-uppercase ls-wide mb-4">{cat.name}</h5>
                <div className="d-flex flex-wrap gap-3">
                  {cat.items.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span className="pill-dot"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
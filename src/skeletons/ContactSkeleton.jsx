import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Container, Row, Col, Form } from 'react-bootstrap';

const ContactSkeleton = () => {
  return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Skeleton height={20} className="mb-4" />
            <Form>
              <div>
                <h3><Skeleton width={150} /></h3>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Label><Skeleton width={100} /></Form.Label>
                      <Skeleton height={35} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Label><Skeleton width={100} /></Form.Label>
                      <Skeleton height={35} />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label><Skeleton width={100} /></Form.Label>
                  <Skeleton height={35} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label><Skeleton width={100} /></Form.Label>
                  <Skeleton height={35} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label><Skeleton width={100} /></Form.Label>
                  <Skeleton height={100} />
                </Form.Group>
                <Skeleton height={35} width={100} />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
  );
};

export default ContactSkeleton;

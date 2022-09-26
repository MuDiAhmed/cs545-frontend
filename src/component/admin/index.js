import React from 'react';
import Container from 'react-bootstrap/Container';
import AdminLeftPanel from './AdminLeftPanel';
import './../../Style.css';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
// import AdminPassReset from './AdminPassReset';

export default function Admin() {
    return (
        <Container className="mt-3">
            <Row>
                <Col sm={3}>
                    <AdminLeftPanel />
                    {/* <AdminPassReset /> */}
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}
import React from 'react'
import { Col, Container, DropdownButton, Row } from 'react-bootstrap'
import { FaArrowDownShortWide } from 'react-icons/fa6'

export default function Filtering() {
    return (
        <Container className='border-top border-dark-subtle'>
            <Row className=' d-flex align-items-center mt-4 mb-4'>
                <Col sm={6}>
                </Col>
                <Col sm={3}>
                    <div className='d-flex align-items-center justify-content-end'>
                        <label className='me-3'>Filter</label>
                        <DropdownButton id="dropdown-basic-button" title="All"></DropdownButton>
                </div>
            </Col>
            <Col sm={3}>
                <div className='d-flex align-items-center justify-content-end'>
                    <label className='me-3'>Sort</label>
                    <DropdownButton id="dropdown-basic-button" title="Added date"></DropdownButton>
                    <FaArrowDownShortWide className='ms-2 fs-5 text-success' />
                </div>
            </Col>
        </Row>



        </Container >
    )
}

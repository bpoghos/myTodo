import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Todo from './Todo/Todo'

export default function Todos() {
  return (
   <Container>
    <Row className='mt-3'>
        <Col lg={12} className='pt-4'>
        <Todo />
        </Col>
        <Col lg={12} className='pt-4'>
        <Todo />
        </Col>
        <Col lg={12} className='pt-4'>
        <Todo />
        </Col>
    </Row>
    
   </Container>
  )
}

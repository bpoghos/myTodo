import React from 'react'
import { FaSquareCheck } from 'react-icons/fa6'
import { Container } from 'react-bootstrap'
import classes from './title.module.css'

export default function Title() {
  return (
    <Container className={classes.titleBox}>
        <h1 className={classes.title}><FaSquareCheck />My Todo-s</h1>
    </Container>
  )
}

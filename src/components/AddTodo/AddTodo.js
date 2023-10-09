import React from 'react'
import {  FaRegCalendarDays } from 'react-icons/fa6'
import { Button, Container, FormControl } from 'react-bootstrap'
import classes from './add-todo.module.css'

export default function AddTodo() {
  return (
    <Container className='d-flex bg-white p-4 rounded-3  align-items-center mb-5' style={{boxShadow: '2px 9px 22px -1px rgba(34, 60, 80, 0.2)'}}>
        <FormControl className='border-0' placeholder='Add new...'/>
        <FaRegCalendarDays className={classes.calendarBtn}/>
        <Button variant='primary' className='pt-2 pb-2 ps-4 pe-4' >ADD</Button>
    </Container>
  )
}

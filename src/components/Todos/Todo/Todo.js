import React from 'react'
import { FaPencil, FaTrash } from 'react-icons/fa6'

export default function Todo() {
  return (
    <div className='d-flex align-items-center'>
        <input type='checkbox' className='me-4' style={{width: '18px', height: '18px'}}/>
        <span className='fs-5'>Buy groceries for next week</span>
        <div style={{margin: '0 0 0 auto'}}>
           <div style={{display: 'flex', justifyContent: 'end'}}>
           <FaPencil className='ms-2 text-primary'/>
            <FaTrash className='ms-2 text-danger'/>
           </div>
           <span>&#9432; 28th Jun 2020</span>
        </div>
    </div>
  )
}

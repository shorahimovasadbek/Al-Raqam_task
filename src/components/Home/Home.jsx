import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {
  return (
    <div className='d-flex justify-content-end'>
      <Button variant='' className='back_home'><Link className='Link_home' to='/'>Back Home</Link></Button>
    </div>
  )
}

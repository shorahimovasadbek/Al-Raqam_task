import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material';
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import './learn.css'

export default function LearnCards() {
  const cards = useLocation()
  let massiv = JSON.parse(localStorage.getItem('massiv'))

  function StorageLocal(lang){
    for(let i = 0; i < massiv.length; i++){
      if(massiv[i].lang === lang){
        massiv[i].progress = 100
        massiv[i].level = "Completed"
      }
    }
    localStorage.setItem('massiv', JSON.stringify(massiv))
  }

  return (
    <div className='px-3'>
      <div className='row g-0 align-items-end px-2'>
        <div className="col-md-6 col-12 mb-2">
          <h2 className='ms-5'>{cards.state.name}</h2>
          <img src={cards.state.flag} alt="img" className='img_learnMore' />
        </div>
        <div className="col-md-6 col-12">
          <iframe className='iframe_learnMore'  src={cards.state.video} frameborder="0"></iframe>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-12">
          <p className='mt-4 text-light text_learn__more'>{cards.state.tips}</p>
        </div>
      </div>
      <p onClick={() => StorageLocal(cards.state.lang)} className='text-center'><Button  variant=""> <Link className='Link_next_task' to = {`/Quiz_Test/${cards.state.lang}`}>Next task </Link> <BsFillArrowRightSquareFill className='ms-2 anima' /></Button></p>
    </div>
  )
}

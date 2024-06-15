import React from 'react'
import '../style/endGame.css'
import { useNavigate } from 'react-router-dom'

function EndGame() {
    const navigate = useNavigate()
  return (
    <div className='container' onClick={()=>navigate('/')}>
        <div className="circle">
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
        </div> 
        <div className="big">
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
        </div>
        <div className="tri"></div>
        <div className="squ">
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
            <div className='div'></div>
        </div>
        <div className="end">
            <div className='div'>E</div>
            <div className='div'>N</div>
            <div className='div'>D</div>
        </div>
    </div>
  )
}

export default EndGame

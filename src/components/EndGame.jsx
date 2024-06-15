import React from 'react';
import '../style/endGame.css';
import { useNavigate, useParams } from 'react-router-dom';

function EndGame() {
  const navigate = useNavigate();
  const {win} = useParams()

  return (
    <div className='container ' onClick={() => navigate('/')}>
      <div className="circle">
        {[...Array(5)].map((_, index) => (
          <div key={index} className='div'></div>
        ))}
      </div>
      <div className="big">
        {[...Array(3)].map((_, index) => (
          <div key={index} className='div'></div>
        ))}
      </div>
      <div className="tri"></div>
      <div className="squ">
        {[...Array(3)].map((_, index) => (
          <div key={index} className='div'></div>
        ))}
      </div>
      <div className="end">
        <div className='div'></div>
        <div className='div'>{win} Win</div>
        <div className='div'></div>
      </div>
    </div>
  );
}

export default EndGame;

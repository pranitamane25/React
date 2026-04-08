
import React from 'react';
import {useNavigate} from 'react-router-dom';

const GoodBye = () => {
  const navigate = useNavigate();

  const handleHelloClick = () => {
    navigate('/');
  };

  return (
        <div>
          <h2>Thank you for accepting me as your mentor</h2>
          <button onClick={handleHelloClick}>Hello</button>

        </div>
    );

  }


export default GoodBye;

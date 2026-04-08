import React from 'react';
import{useNavigate} from 'react-router-dom';

const Hello =() =>{
  const navigate = useNavigate();

  const handleGoodByeClick = () => {
    console.log("Goodbye button is Clicked ....");
    navigate('/Goodbye');
  }

  
  const handleLoginClick = () => {
    console.log("Sign In button is Clicked ....");
    navigate('/Login');
  }
  return (
    <div>
      <h2>Welcome to transflower</h2>
      <button onClick= {handleGoodByeClick}>Goodbye</button>
      <button onClick= {handleLoginClick}>Sign In</button>

    </div>
  );

}

export default Hello;

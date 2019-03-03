import React from 'react';
import './../styles/components/LoginPage.css';

const LoginPage = ({ handleLogin, handleLoginGuest }) => {
  return (
    <section className='login'>
      <div className='login__buttons'>
        <button onClick={handleLogin} className='login__button btn'>Login with Google</button>
        <button onClick={handleLoginGuest} className='login__button btn'>Guest</button>
      </div>
    </section>
  );
};

export default LoginPage;

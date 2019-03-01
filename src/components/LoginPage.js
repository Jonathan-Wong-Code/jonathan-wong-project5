import React from 'react';

const LoginPage = ({ handleLogin, handleLoginGuest }) => {
  return (
    <section className='login'>
      <button onClick={handleLogin}>Login with Google</button>
      <button onClick={handleLoginGuest}>Guest</button>
    </section>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();


    const correctEmail = 'user123'
    const correctPassword = 'senha123'

    if (email == correctEmail && password == correctPassword) {
      navigate('/');
    } else {
      alert('Senha ou usuario incorreto');
    }

  }


  return (
    <div className="main">
      <form onSubmit={handleSubmit}>

        <h1>ShopSite</h1>
        <div className="input-box">
          <input 
          type="text" 
          value = {email} 
          placeholder='Usuario' 
          required 
          onChange = {(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="input-box">
          <input type="password"  
          value = {password} 
          placeholder='Senha' 
          required 
          onChange = {(e)=> setPassword(e.target.value)}></input>
        </div>
        <button type="submit">Login</button>
      </form>

    </div>





  )
}

export default LoginPage;
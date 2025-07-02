import React, {useState} from 'react';
import './Register.css';
import {Link} from 'react-router-dom';

const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [sucess, setSucess] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setError('');
    setSucess('');

    if(!username || !email || !password || !confirmPassword){
       return;

    }

     if(password.length < 6 ){
       setError('Por favor, preenchimento precisa ter pelo mens 6 caracteres');
       return;

    }

    if(password !== confirmPassword){
      setError ('As senhas não coincidem.');
      return;
    }

    console.log('Dados de registro:', {username, email, password});
    setSucess('registro bem-sucedido! Redirecionando...');   
  }

  return(
    <div className = "registerPage">
      <div className = "register-container">
        <h2>Register Page</h2>
        {error && <p className = "error-message">{error}</p>}
        {sucess && <p className = "sucess-message">{sucess}</p>}
        <form onSubmit = {handleSubmit}>
          <div className = "form-group"> 
            <label htmlFor = "username">Nome de Usuário: </label>
            <input
            type="text"
            id = "username"
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}
            required
            />
          </div>

          <div className = "form-group"> 
            <label htmlFor = "email">E-mail: </label>
            <input
            type="text"
            id = "email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            required
            />
          </div>

          <div className = "form-group"> 
            <label htmlFor = "password">Senha: </label>
            <input
            type="password"
            id = "password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            required
            />
          </div>

          <div className = "form-group"> 
            <label htmlFor = "confirmPassword">Confirme a sua Senha: </label>
            <input
            type="password"
            id = "confirmPassword"
            value = {confirmPassword}
            onChange = {(e) => setConfirmPassword(e.target.value)}
            required
            />
          </div>
          

          

          <button type='submit'>Register</button>
          <Link to="/" className = "home-direct">Home</Link>


        </form>
        
        <p></p>

      </div>
    </div>
  )
    

}

export default RegisterPage;
import './Login.css';
const LoginPage = () => {
  return (
    <div className="main">
      <form action="">

        <h1>ShopSite</h1>
        <div className="input-box">
          <input type="text" placeholder='Usuario'required></input>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Senha' required></input>
        </div>
        <button type="submit">Login</button>
      </form>

    </div>

  )
}

export default LoginPage; 
import React from 'react';


const Logapp = () =>{
  return(
  <div className="container">
    <div className="login">
      <h1>Login to App</h1>
      <form method="post" action="">
        <p><input type="text" name="login" defaultValue="" placeholder="Username or Email"/></p>
        <p><input type="password" name="password" defaultValue="" placeholder="Password"/></p>
        <p className="remember_me">
          <label>
            <input type="checkbox" name="remember_me" id="remember_me"/>
            Remember me on this computer
          </label>
        </p>
        <p class="submit"><input type="submit" name="commit" value="Login"/></p>
      </form>
    </div>
  </div>
  )
}

  export default Logapp

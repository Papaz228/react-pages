import React from 'react';
function Main() {
  return (
    
    <div class="container">
    <div class="main">
        <form action="" class="signin">
            <div class="main-header">
                <h3>Welcome to <strong class="green-txt">LOREM</strong> </h3>
                <p>Have an account ? <a href="signin.html">Sign in</a></p>
            </div>
            <h1>Sign up</h1>
            <div class="">
                <p>Enter your username or email address</p>
                <input class="input-form" type="text" placeholder="Username or email address"></input>
            </div>
            <div class="user-div">
                <div class="div-2">
                    <p>User name</p>
                    <input class="input-form2" type="text" placeholder="User name"></input>
                </div>
                <div class="div-2">
                    <p>Contact number</p>
                    <input class="input-form2" type="text" placeholder="Contact number"></input>
                </div>
            </div>
            <div class="">
                <p>Enter your password</p>
                <input class="input-form" type="password" placeholder="Password"></input>
            </div>
            <div class="btn-div">
                <button class="btn">Sign up</button>
            </div>                
        </form>
    </div>
    </div>);
}
export default Main;

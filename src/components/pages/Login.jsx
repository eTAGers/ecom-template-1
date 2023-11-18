import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div>
        <div class="mobile-menu d-sm-none">
          <ul>
            <li>
              <a href="demo3.php" class="active">
                <i data-feather="home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i data-feather="align-justify"></i>
                <span>Category</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i data-feather="shopping-bag"></i>
                <span>Cart</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i data-feather="heart"></i>
                <span>Wishlist</span>
              </a>
            </li>
            <li>
              <a href="user-dashboard.php">
                <i data-feather="user"></i>
                <span>Account</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="login-section">
          <div class="materialContainer">
            <div class="box">
              <form method="POST" action="http://localhost:8000/login">
                <input
                  type="hidden"
                  name="_token"
                  value="MkRqEzTGuoSx6LqJUm0OAKxSgNUYt26wTT7RMUZY"
                />
                <div class="login-title">
                  <h2>Login</h2>
                </div>
                <div class="input">
                  <label for="name">Username</label>
                  <input
                    type="email"
                    id="name"
                    name="email"
                    required=""
                    autofocus=""
                    autocomplete="name"
                  />
                </div>

                <div class="input">
                  <label for="pass">Password</label>
                  <input
                    type="password"
                    id="pass"
                    class="block mt-1 w-full"
                    name="password"
                    required=""
                    autocomplete="current-password"
                  />
                </div>

                <a href="javascript:void(0)" class="pass-forgot">
                  Forgot your password?
                </a>

                <div class="button login">
                  <button type="submit">
                    <span>Log In</span>
                    <i class="fa fa-check"></i>
                  </button>
                </div>

                <p>
                  Not a member?{" "}
                  <a href="/signup" class="theme-color">
                    Sign up now
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

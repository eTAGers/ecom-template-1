import React, { Component } from 'react'

export class Signup extends Component {
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
                <form method="POST" action="http://localhost:8000/register">
                    <input type="hidden" name="_token" value="MkRqEzTGuoSx6LqJUm0OAKxSgNUYt26wTT7RMUZY" />
                    <div class="login-title">
                        <h2>Register</h2>
                    </div>

                    <div class="input">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="block mt-1 w-full" name="name"
                            required="" autofocus="" autocomplete="name" />
                    </div>

                    <div class="input">
                        <label for="phone">Phone</label>
                        <input type="text" id="phone" class="block mt-1 w-full"   name="phone"
                            required="" autofocus="" autocomplete="phone" />
                    </div>

                    <div class="input">
                        <label for="emailname">Email Address</label>
                        <input type="email" id="emailname" class="block mt-1 w-full"  name="email"
                             required="" autocomplete="username" />
                    </div>

                    <div class="input">
                        <label for="pass">Password</label>
                        <input type="password" id="pass" class="block mt-1 w-full" name="password" required=""
                            autocomplete="new-password" />
                    </div>

                    <div class="input">
                        <label for="compass">Confirm Password</label>
                        <input type="password" id="compass" class="block mt-1 w-full" name="password_confirmation"
                            required="" autocomplete="new-password" />
                    </div>

                    <div class="button login">
                        <button type="submit">
                            <span>Sign Up</span>
                            <i class="fa fa-check"></i>
                        </button>
                    </div>
                </form>
            </div>
            <p><a href="/login" class="theme-color">Already have an account?</a></p>
        </div>
    </div>
      </div>
    )
  }
}

export default Signup
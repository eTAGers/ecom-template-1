import React, { Component } from 'react'

export class Whishlist extends Component {
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
    </div><section class="breadcrumb-section section-b-space" 
    // style="padding-top:20px;padding-bottom:20px;"
    >
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3>Wishlist</h3>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/">
                                    <i class="fas fa-home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <section class="wish-list-section section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 table-responsive">
                    <table class="table cart-table wishlist-table">
                        <thead>
                            <tr class="table-head">
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">price</th>
                                <th scope="col">availability</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <a href="details.php">
                                        <img src="assets/images/fashion/product/front/17.jpg"
                                            class=" blur-up lazyload" alt="" />
                                    </a>
                                </td>
                                <td>
                                    <a href="details.php" class="font-light">Ipsa Illo Perferendis Rerum</a>
                                    <div class="mobile-cart-content row">
                                        <div class="col">
                                            <p>In Stock</p>
                                        </div>
                                        <div class="col">
                                            <p class="fw-bold">$6</p>
                                        </div>
                                        <div class="col">
                                            <h2 class="td-color">
                                                <a href="javascript:void(0)" class="icon">
                                                    <i class="fas fa-times"></i>
                                                </a>
                                            </h2>
                                            <h2 class="td-color">
                                                <a href="cart.php" class="icon">
                                                    <i class="fas fa-shopping-cart"></i>
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="fw-bold">$6</p>
                                </td>
                                <td>
                                    <p>In Stock</p>
                                </td>
                                <td>

                                    <a href="javascript:void(0)" class="icon">
                                        <i class="fas fa-shopping-cart"></i>
                                    </a>
                                    <a href="javascript:void(0)" class="icon">
                                        <i class="fas fa-times"></i>
                                    </a>
                                </td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
      </div>
    )
  }
}

export default Whishlist
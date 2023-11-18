import React, { Component, useEffect, useState } from "react";
import "../styles/shop.css";
import APIKit from "../../utils/APIKIT";

function Shop(props) {
  useEffect(() => {
    getProduct();
  }, []);
  const [product, setProduct] = useState([]);
  const getProduct = async (data = "") => {
    await APIKit.get("api/store/product/fetch").then((res) => {
      if (res.data.status === 200) {
        setProduct(res.data.data);
      } else {
      }
    });
  };
  return (
    <div>
      <main className="main-wrapper">
        <div className="axil-breadcrumb-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="inner">
                  <ul className="axil-breadcrumb">
                    <li className="axil-breadcrumb-item">
                      <a href="index-2.html">Home</a>
                    </li>
                    <li className="separator"></li>
                    <li
                      className="axil-breadcrumb-item active"
                      aria-current="page"
                    >
                      My Account
                    </li>
                  </ul>
                  <h1 className="title">Explore All Products</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="inner">
                  <div className="bradcrumb-thumb">
                    <img
                      src="assets/images/product/product-45.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-shop-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="axil-shop-top">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="category-select">
                        <select className="single-select">
                          <option>Categories</option>
                          <option>Fashion</option>
                          <option>Electronics</option>
                          <option>Furniture</option>
                          <option>Beauty</option>
                        </select>

                        <select className="single-select">
                          <option>Color</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>Green</option>
                          <option>Pink</option>
                        </select>

                        <select className="single-select">
                          <option>Price Range</option>
                          <option>0 - 100</option>
                          <option>100 - 500</option>
                          <option>500 - 1000</option>
                          <option>1000 - 1500</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-select mt_md--10 mt_sm--10 justify-content-lg-end">
                        <select className="single-select">
                          <option>Sort by Latest</option>
                          <option>Sort by Name</option>
                          <option>Sort by Price</option>
                          <option>Sort by Viewed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row--15">
              {product.map((item) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="axil-product product-style-one has-color-pick mt--40">
                      <div className="thumbnail">
                        <a href="single-product.html">
                          <img
                            src="assets/images/product/electric/product-01.png"
                            alt="Product Images"
                          />
                        </a>
                        <div className="label-block label-right">
                          <div className="product-badget">20% OFF</div>
                        </div>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="wishlist">
                              <a href="wishlist.html">
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                            <li className="select-option">
                              <a href="cart.html">Add to Cart</a>
                            </li>
                            <li className="quickview">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="inner">
                          <h5 className="title">
                            <a href="single-product.html">{item.name}</a>
                          </h5>
                          <div className="product-price-variant">
                            <span className="price current-price">
                              ${item.selling_price}
                            </span>
                            <span className="price old-price">
                              ${item.original_price}
                            </span>
                          </div>
                          <div className="color-variant-wrapper">
                            <ul className="color-variant">
                              <li className="color-extra-01 active">
                                <span>
                                  <span className="color"></span>
                                </span>
                              </li>
                              <li className="color-extra-02">
                                <span>
                                  <span className="color"></span>
                                </span>
                              </li>
                              <li className="color-extra-03">
                                <span>
                                  <span className="color"></span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center pt--30">
              <a href="#" className="axil-btn btn-bg-lighter btn-load-more">
                Load more
              </a>
            </div>
          </div>
        </div>
        <div className="axil-newsletter-area axil-section-gap pt--0">
          <div className="container">
            <div className="etrade-newsletter-wrapper bg_image bg_image--5">
              <div className="newsletter-content">
                <span className="title-highlighter highlighter-primary2">
                  <i className="fas fa-envelope-open"></i>Newsletter
                </span>
                <h2 className="title mb--40 mb_sm--30">Get weekly update</h2>
                <div className="input-group newsletter-form">
                  <div className="position-relative newsletter-inner mb--15">
                    <input placeholder="example@gmail.com" type="text" />
                  </div>
                  <button type="submit" className="axil-btn mb--15">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="service-area">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20">
            <div className="col">
              <div className="service-box service-style-2">
                <div className="icon">
                  <img src="assets/images/icons/service1.png" alt="Service" />
                </div>
                <div className="content">
                  <h6 className="title">Fast &amp; Secure Delivery</h6>
                  <p>Tell about your service.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-box service-style-2">
                <div className="icon">
                  <img src="assets/images/icons/service2.png" alt="Service" />
                </div>
                <div className="content">
                  <h6 className="title">Money Back Guarantee</h6>
                  <p>Within 10 days.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-box service-style-2">
                <div className="icon">
                  <img src="assets/images/icons/service3.png" alt="Service" />
                </div>
                <div className="content">
                  <h6 className="title">24 Hour Return Policy</h6>
                  <p>No question ask.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-box service-style-2">
                <div className="icon">
                  <img src="assets/images/icons/service4.png" alt="Service" />
                </div>
                <div className="content">
                  <h6 className="title">Pro Quality Support</h6>
                  <p>24/7 Live support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade quick-view-product"
        id="quick-view-modal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="far fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="single-product-thumb">
                <div className="row">
                  <div className="col-lg-7 mb--40">
                    <div className="row">
                      <div className="col-lg-10 order-lg-2">
                        <div className="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
                          <div className="thumbnail">
                            <img
                              src="assets/images/product/product-big-01.png"
                              alt="Product Images"
                            />
                            <div className="label-block label-right">
                              <div className="product-badget">20% OFF</div>
                            </div>
                            <div className="product-quick-view position-view">
                              <a
                                href="assets/images/product/product-big-01.png"
                                className="popup-zoom"
                              >
                                <i className="far fa-search-plus"></i>
                              </a>
                            </div>
                          </div>
                          <div className="thumbnail">
                            <img
                              src="assets/images/product/product-big-02.png"
                              alt="Product Images"
                            />
                            <div className="label-block label-right">
                              <div className="product-badget">20% OFF</div>
                            </div>
                            <div className="product-quick-view position-view">
                              <a
                                href="assets/images/product/product-big-02.png"
                                className="popup-zoom"
                              >
                                <i className="far fa-search-plus"></i>
                              </a>
                            </div>
                          </div>
                          <div className="thumbnail">
                            <img
                              src="assets/images/product/product-big-03.png"
                              alt="Product Images"
                            />
                            <div className="label-block label-right">
                              <div className="product-badget">20% OFF</div>
                            </div>
                            <div className="product-quick-view position-view">
                              <a
                                href="assets/images/product/product-big-03.png"
                                className="popup-zoom"
                              >
                                <i className="far fa-search-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 order-lg-1">
                        <div className="product-small-thumb small-thumb-wrapper">
                          <div className="small-thumb-img">
                            <img
                              src="assets/images/product/product-thumb/thumb-08.png"
                              alt="thumb image"
                            />
                          </div>
                          <div className="small-thumb-img">
                            <img
                              src="assets/images/product/product-thumb/thumb-07.png"
                              alt="thumb image"
                            />
                          </div>
                          <div className="small-thumb-img">
                            <img
                              src="assets/images/product/product-thumb/thumb-09.png"
                              alt="thumb image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 mb--40">
                    <div className="single-product-content">
                      <div className="inner">
                        <div className="product-rating">
                          <div className="star-rating">
                            <img
                              src="assets/images/icons/rate.png"
                              alt="Rate Images"
                            />
                          </div>
                          <div className="review-link">
                            <a href="#">
                              (<span>1</span> customer reviews)
                            </a>
                          </div>
                        </div>
                        <h3 className="product-title">Serif Coffee Table</h3>
                        <span className="price-amount">$155.00 - $255.00</span>
                        <ul className="product-meta">
                          <li>
                            <i className="fal fa-check"></i>In stock
                          </li>
                          <li>
                            <i className="fal fa-check"></i>Free delivery
                            available
                          </li>
                          <li>
                            <i className="fal fa-check"></i>Sales 30% Off Use
                            Code: MOTIVE30
                          </li>
                        </ul>
                        <p className="description">
                          In ornare lorem ut est dapibus, ut tincidunt nisi
                          pretium. Integer ante est, elementum eget magna.
                          Pellentesque sagittis dictum libero, eu dignissim
                          tellus.
                        </p>

                        <div className="product-variations-wrapper">
                          <div className="product-variation">
                            <h6 className="title">Colors:</h6>
                            <div className="color-variant-wrapper">
                              <ul className="color-variant mt--0">
                                <li className="color-extra-01 active">
                                  <span>
                                    <span className="color"></span>
                                  </span>
                                </li>
                                <li className="color-extra-02">
                                  <span>
                                    <span className="color"></span>
                                  </span>
                                </li>
                                <li className="color-extra-03">
                                  <span>
                                    <span className="color"></span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="product-variation">
                            <h6 className="title">Size:</h6>
                            <ul className="range-variant">
                              <li>xs</li>
                              <li>s</li>
                              <li>m</li>
                              <li>l</li>
                              <li>xl</li>
                            </ul>
                          </div>
                        </div>

                        <div className="product-action-wrapper d-flex-center">
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>

                          <ul className="product-action d-flex-center mb--0">
                            <li className="add-to-cart">
                              <a
                                href="cart.html"
                                className="axil-btn btn-bg-primary"
                              >
                                Add to Cart
                              </a>
                            </li>
                            <li className="wishlist">
                              <a
                                href="wishlist.html"
                                className="axil-btn wishlist-btn"
                              >
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-search-modal" id="header-search-modal">
        <button className="card-close sidebar-close">
          <i className="fas fa-times"></i>
        </button>
        <div className="header-search-wrap">
          <div className="card-header">
            <form action="#">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  name="prod-search"
                  id="prod-search"
                  placeholder="Write Something...."
                />
                <button type="submit" className="axil-btn btn-bg-primary">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="card-body">
            <div className="search-result-header">
              <h6 className="title">24 Result Found</h6>
              <a href="shop.html" className="view-all">
                View All
              </a>
            </div>
            <div className="psearch-results">
              <div className="axil-product-list">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img
                      src="assets/images/product/electric/product-09.png"
                      alt="Yantiti Leather Bags"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <span className="rating-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </span>
                    <span className="rating-number">
                      <span>100+</span> Reviews
                    </span>
                  </div>
                  <h6 className="product-title">
                    <a href="single-product.html">Media Remote</a>
                  </h6>
                  <div className="product-price-variant">
                    <span className="price current-price">$29.99</span>
                    <span className="price old-price">$49.99</span>
                  </div>
                  <div className="product-cart">
                    <a href="cart.html" className="cart-btn">
                      <i className="fal fa-shopping-cart"></i>
                    </a>
                    <a href="wishlist.html" className="cart-btn">
                      <i className="fal fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="axil-product-list">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img
                      src="assets/images/product/electric/product-09.png"
                      alt="Yantiti Leather Bags"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <span className="rating-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </span>
                    <span className="rating-number">
                      <span>100+</span> Reviews
                    </span>
                  </div>
                  <h6 className="product-title">
                    <a href="single-product.html">Media Remote</a>
                  </h6>
                  <div className="product-price-variant">
                    <span className="price current-price">$29.99</span>
                    <span className="price old-price">$49.99</span>
                  </div>
                  <div className="product-cart">
                    <a href="cart.html" className="cart-btn">
                      <i className="fal fa-shopping-cart"></i>
                    </a>
                    <a href="wishlist.html" className="cart-btn">
                      <i className="fal fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

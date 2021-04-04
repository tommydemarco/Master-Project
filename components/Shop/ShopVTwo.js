import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

class ShopVTwo extends Component {
  handleAddToCart = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let { products } = this.props;
    return (
      <section className="product-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="woocommerce-topbar">
                    <div className="row h-100 justify-content-center align-items-center">
                      <div className="col-lg-7 col-md-7">
                        <div className="woocommerce-result-count">
                          <p>Showing 1–16 of 100 results</p>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-5">
                        <div className="woocommerce-topbar-ordering">
                          <form>
                            <div className="select-box">
                              <select className="form-control">
                                <option value="1">Sort by Popularity</option>
                                <option value="2">
                                  Sort by Average Rating
                                </option>
                                <option value="0">Sort by Latest</option>
                                <option value="3">
                                  Sort by price: Low to High
                                </option>
                                <option value="4">
                                  Sort by price: High to Low
                                </option>
                                <option value="5">Sort by New</option>
                              </select>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {products.map((data, idx) => (
                  <div className="col-lg-6 col-md-6" key={idx}>
                    <div className="single-product">
                      <div className="product-img">
                        <img src={data.image} alt="item" />

                        <Link href="#">
                          <a
                            className="add-to-cart-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              this.handleAddToCart(data.id);
                            }}
                          >
                            Add to Cart{" "}
                            <i className="icofont-shopping-cart"></i>
                          </a>
                        </Link>
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">
                            <a>{data.title}</a>
                          </Link>
                        </h3>

                        <div className="row h-100 justify-content-center align-items-center">
                          <div className="col-lg-5">
                            <h5>
                              ${data.price} <span>${data.price - 3}</span>
                            </h5>
                          </div>

                          <div className="col-lg-7">
                            <ul>
                              <li>
                                <i className="icofont-star"></i>
                              </li>
                              <li>
                                <i className="icofont-star"></i>
                              </li>
                              <li>
                                <i className="icofont-star"></i>
                              </li>
                              <li>
                                <i className="icofont-star"></i>
                              </li>
                              <li>
                                <i className="icofont-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="icofont-double-left"></i>
                          </a>
                        </li>

                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>

                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>

                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>

                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="icofont-double-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="sidebar-area">
                <div className="widget widget-search">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>

                <div className="widget widget_product_categories">
                  <h3 className="widget-title">Filter Products</h3>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopVTwo);

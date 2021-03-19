import React, { Component } from 'react';

class Wishlist extends Component {
  render() {
    return (
      <div>
        <div className="all-title-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Wishlist</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Shop</a></li>
                  <li className="breadcrumb-item active">Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="wishlist-box-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-main table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Unit Price </th>
                        <th>Stock</th>
                        <th>Add Item</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img className="img-fluid" src="assets/images/img-pro-01.jpg" alt="" />
                          </a>
                        </td>
                        <td className="name-pr">
                          <a href="#">
                            Lorem ipsum dolor sit amet
								</a>
                        </td>
                        <td className="price-pr">
                          <p>$ 80.0</p>
                        </td>
                        <td className="quantity-box">In Stock</td>
                        <td className="add-pr">
                          <a className="btn hvr-hover" href="#">Add to Cart</a>
                        </td>
                        <td className="remove-pr">
                          <a href="#">
                            <i className="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img className="img-fluid" src="assets/images/img-pro-02.jpg" alt="" />
                          </a>
                        </td>
                        <td className="name-pr">
                          <a href="#">
                            Lorem ipsum dolor sit amet
								</a>
                        </td>
                        <td className="price-pr">
                          <p>$ 60.0</p>
                        </td>
                        <td className="quantity-box">In Stock</td>
                        <td className="add-pr">
                          <a className="btn hvr-hover" href="#">Add to Cart</a>
                        </td>
                        <td className="remove-pr">
                          <a href="#">
                            <i className="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img className="img-fluid" src="assets/images/img-pro-03.jpg" alt="" />
                          </a>
                        </td>
                        <td className="name-pr">
                          <a href="#">
                            Lorem ipsum dolor sit amet
								</a>
                        </td>
                        <td className="price-pr">
                          <p>$ 30.0</p>
                        </td>
                        <td className="quantity-box">In Stock</td>
                        <td className="add-pr">
                          <a className="btn hvr-hover" href="#">Add to Cart</a>
                        </td>
                        <td className="remove-pr">
                          <a href="#">
                            <i className="fas fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
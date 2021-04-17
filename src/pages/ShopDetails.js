import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShopDetails extends Component {
  render() {
    return (
      <div>
        <div className="all-title-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Shop Detail</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Shop</a></li>
                  <li className="breadcrumb-item active">Shop Detail </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetails;
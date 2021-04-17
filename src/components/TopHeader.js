import React, { Component } from 'react';
import { FaAffiliatetheme, FaTelegramPlane, FaCodepen } from "react-icons/fa";
import { Link } from 'react-router-dom';

class TopHeader extends Component {
  render() {
    return (
      <div className="main-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="custom-select-box">
                <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
                  <option>¥ JPY</option>
                  <option>$ USD</option>
                  <option>€ EUR</option>
                </select>
              </div>
              <div className="right-phone-box">
                <p>Call US :- <Link to="#"> +11 900 800 100</Link></p>
              </div>
              <div className="our-link">
                <ul>
                  <li><Link to="/myaccount"><i className="fa fa-user s_color"></i> My Account</Link></li>
                  <li><Link to="#"><FaTelegramPlane /> Our location</Link></li>
                  <li><Link to="#"><FaCodepen /> Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="login-box">
                <select id="basic" className="selectpicker show-tick form-control" data-placeholder="Sign In">
                  <option>Register Here</option>
                  <option>Sign In</option>
                </select>
              </div>
              <div className="text-slid-box">
                <div id="offer-box" className="carouselTicker">
                  <ul className="offer-box">
                    <li>
                      <FaAffiliatetheme /> 20% off Entire Purchase Promo code: offT80
                                </li>
                    <li>
                      <FaAffiliatetheme /> 50% - 80% off on Vegetables
                                </li>
                    <li>
                      <FaAffiliatetheme /> Off 10%! Shop Vegetables
                                </li>
                    <li>
                      <FaAffiliatetheme /> Off 50%! Shop Now
                                </li>
                    <li>
                      <FaAffiliatetheme /> Off 10%! Shop Vegetables
                                </li>
                    <li>
                      <FaAffiliatetheme /> 50% - 80% off on Vegetables
                                </li>
                    <li>
                      <FaAffiliatetheme /> 20% off Entire Purchase Promo code: offT30
                                </li>
                    <li>
                      <FaAffiliatetheme /> Off 50%! Shop Now
                                </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
      <div>
        <div className="categories-shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="shop-cat-box">
                  <img className="img-fluid" src="assets/images/categories_img_01.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="shop-cat-box">
                  <img className="img-fluid" src="assets/images/categories_img_02.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="shop-cat-box">
                  <img className="img-fluid" src="assets/images/categories_img_03.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="box-add-products">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="offer-box-products">
                  <img class="img-fluid" src="assets/images/add-img-01.jpg" alt="" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="offer-box-products">
                  <img class="img-fluid" src="assets/images/add-img-02.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
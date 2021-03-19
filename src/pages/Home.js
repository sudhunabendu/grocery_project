import React, { Component } from 'react';
import Blogs from '../components/Blogs';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../components/Slider';

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Categories />
        <Products />
        <Blogs />
      </div>
    );
  }
}

export default Home;
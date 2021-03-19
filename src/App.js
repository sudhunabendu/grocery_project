import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Wishlist from './pages/Wishlist';
import Myaccount from './pages/Myaccount';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';



function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/myaccount" component={Myaccount} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOut} />


        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

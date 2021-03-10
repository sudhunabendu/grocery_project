import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Slider from './components/Slider';

const App = () => {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Slider />
      <Footer />


    </div>
  );
}

export default App;

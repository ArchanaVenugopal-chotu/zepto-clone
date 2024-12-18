import './App.css';
import Nav from './Nav.js';
import Body from './Body.js';
import Footer from './Footer.js';

function Homepage() {
  return (
    <div className="homepage">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default Homepage;

import './App.css';
import Body from './components/Body';
// import Divider from './components/divider';
// import Footer from './components/Footer';
// import Feature from './components/Features';
// import Testimonial from './components/testimonials';
import About from './components/Body/about';
// import Contact from './components/Contact';
// import SocialMedia from './components/Social-media';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Header from './components/Navbar';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      </Routes> 
      </Router>
  );
}

export default App;

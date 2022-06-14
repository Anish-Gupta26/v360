import './App.css';
import Body from './components/Body';
import Divider from './components/divider';
import Footer from './components/Footer';
import Feature from './components/Features';
import Testimonial from './components/testimonials';
import About from './components/Body/about';
import Contact from './components/Contact';
import SocialMedia from './components/Social-media';

function App() {
  return (
     <div className="App">
      <Divider/>
      <div className='container'>
      <Body/>
      <Feature/>
      <Testimonial/>
      <About/>
      <Contact/>
      <SocialMedia/>
      </div>
      <Footer/> 
    </div>
  );
}

export default App;

import './App.css';
import Body from './components/Body';
import About from './components/Body/about';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Privacy from './components/Privacy';
import Phtography from './components/Features/photography';
import Logistics from './components/Features/logistics';
import Anlytics from './components/Features/analytics';
import Announcement from './components/announcement';

function App() {
  return (
    // Routes are used for making website multipage 
    <Router>
      <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/photography' element={<Phtography/>}/>
      <Route path='/logistics' element={<Logistics/>}/>
      <Route path='/analytics' element={<Anlytics/>}/>
      <Route path='/announcement' element={<Announcement/>}/>
      </Routes> 
      </Router>
  );
}

export default App;

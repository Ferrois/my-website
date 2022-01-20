import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

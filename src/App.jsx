import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Archive, Home, Purse, Services } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
     <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/purse" element={ <Purse />}/>
            <Route path="/services" element={ <Services />}/>
            <Route path="/archive" element={ <Archive />}/>
    </Routes>
      
  );
}

export default App;

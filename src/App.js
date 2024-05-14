import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import Display from './components/Display'
import List from './components/List';
import ForYou from './components/ForYou';
import Free from './components/Free';
import Premium from './components/Premium';
import Sports from './components/Sports';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/foryou" element={<ForYou/>}/>
        <Route exact path='/sports' element={<Sports/>}></Route>
        <Route exact path="/free" element={<Free/>}/>
        <Route exact path="/premium" element={<Premium/>}/>
        <Route path='/list' element={<List/>}/>
        <Route exact path='/video/:id' element={<Video/>}/>
        <Route exact path='/video/:id/display' element={<Display/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

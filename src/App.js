
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Chatbox from './components/Chatbox';
import AddItem from './components/AddItem';
import SearchMap from './components/SearchMap';

function App() {
  return (
    
    < >
    
    <Router>
      

      <Routes>
      <Route path="/" exact element={<Home/> } />
      </Routes>
      <Routes>
      <Route path="/chat" exact element={<Chatbox/> } />
      </Routes>
      <Routes>
      <Route path="/additem" exact element={<AddItem/>} />
      </Routes>
      <Routes>
      <Route path="/mapsearch" exact element={<SearchMap/> } />
      </Routes>

      <Routes>
      <Route path="/message" exact element={<Chatbox/> } />
      </Routes>
 
  </Router>





    </>
  );
}

export default App;

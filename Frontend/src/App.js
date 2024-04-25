
import './App.css';
import Home from './components/Home';
import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItems } from './actions/items';
import Dashboard from './components/Navbar';
import Navbar from './components/Navbar';
function App() {

  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getItems());
  },[]);
  return (
    
<Home></Home>

  );
}

export default App;

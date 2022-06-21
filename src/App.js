import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import React, { useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [btnText , setbtnText] = useState("Enable Light Mode");
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setbtnText("Enable light Mode");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setbtnText("Disable light Mode");
    }
  }
  return (
    <>
    <Navbar title="Text Editor Pro" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    <Footer />
    </> 
  );
}

export default App;

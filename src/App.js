import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has enabled","success");
      document.title='TextUtils - Dark mode'
      // setInterval(()=>{
      //   document.title='TextUtils is amazing mode'
      // },2000)
      // setInterval(()=>{
      //   document.title='install textutils now'
      // },1500)
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor='white';
      showAlert("Light mode has enabled","success");
      document.title='TextUtils - Light mode'
    }
  }
  return (
    <>
     <Router>
       <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
    <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>
          </Route>
       </Switch>
    </div>
     </Router>
   </>
  );
}

export default App;


import './App.css';
import React, { useState, useTransition } from 'react'
import Navbar from './componets/Navbar';
//import About from './componets/About';
import TextForm from './componets/TextForm';
function App(props) {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{

      if(mode=='light')
      {
        setMode('dark');
        document.body.style.background='grey';
      }
      else{
        {
          setMode('light');
          document.body.style.background='white';
        }
      }

  }
 
  return (
    <> 
    
<Navbar title="TextUtils2" aboutText="About Text" mode={mode} toggleMode={toggleMode} />
*<div className="container my-3"><TextForm mode={mode} /></div>
{/*<div className="container" my-3>

<About/>
//</div>
  */}
    </>
  );
}

export default App;

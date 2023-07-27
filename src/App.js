import { useState } from 'react';
import './App.css';
import Navbar from './Coustom_Components/Navbar';
import Textform from './Coustom_Components/Textform';
import About from './Coustom_Components/About';
import Alert from './Coustom_Components/Alert';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link,
//   BrowserRouter
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');    //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);          //alert mate state banavi... state object banavisu

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
      },1500)
  }



  const bgRemover = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');

  }
  const toggleMode = (cls) =>{
    console.log(cls);

    bgRemover();
    document.body.classList.add('bg-' + cls);

    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      // document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";

      document.title = "TextUtils : Dark Mode"
      
      // setInterval(() =>{
        //   document.title = "TextUtils is amazing"
        // },2000)
        // setInterval(() =>{
          //   document.title = "Download TextUtils"
          // },1500)
        }
        else{
          setMode('light')
          document.body.style.backgroundColor = 'white'
          // document.body.style.color = 'black'
          showAlert("Light mode has been enabled", "danger")
          // document.title = "TextUtils - Light Mode";

          document.title = "TextUtils : Light Mode"
    }
  }


  return(
  <>

   {/* <Navbar title="Textutils" Text="About Me" /> */}
   {/* <Navbar /> */}
          <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
          {/* <Navbar mode={mode} togglemode={toggleMode} /> */}
          <Alert alert={alert} />
          <div className="container my-5" >
            <Textform showAlert={showAlert} heading="Fill the below Form" mode={mode} />
          </div>
          {/* <About /> */}


  {/* <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-5" >
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}>
        </Route>  
        <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} />}>
        </Route>
      </Routes> 
    </div>
  </BrowserRouter> */}


  </>
  );
}

export default App;

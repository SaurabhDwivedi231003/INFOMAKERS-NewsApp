import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

    const pageSize = 50;
    const apiKey = "733ef8b9aa1245a69a7f4c1c0d28ba78"

    const[progress , setProgress] = useState(0);
    // const[pageSize] = useState(50);
    // const[apiKey] = useState("733ef8b9aa1245a69a7f4c1c0d28ba78");


    // state = {
    //   progress:0
    // }
    // setProgress = (progress) => {
    //   setState({progress : progress })
    // }

    return (
      <div> 
      <Router>
      <NavBar/>  
      <LoadingBar color='#D72F2F' height={3}   progress={progress}  />
      <Switch>
          <Route exact path="/"><News setProgress =  {setProgress}  apiKey={apiKey}  key="general" pageSize={pageSize} country= 'in' category='general'/> </Route>
          <Route exact path="/business"><News setProgress =  {setProgress}  apiKey={apiKey} key="business"  pageSize={pageSize} country= 'in' category='business'/> </Route>
          <Route exact path="/entertainment"><News setProgress =  {setProgress}  apiKey={apiKey}  key="entertainment" pageSize={pageSize} country= 'in' category='entertainment'/> </Route>
          <Route exact path="/health"><News setProgress =  {setProgress}  apiKey={apiKey}  key="health" pageSize={pageSize} country= 'in' category='health'/> </Route>
          <Route exact path="/science"><News setProgress =  {setProgress}  apiKey={apiKey}  key="science" pageSize={pageSize} country= 'in' category='science'/> </Route>
          <Route exact path="/sports"><News setProgress =  {setProgress}  apiKey={apiKey}  key="sports" pageSize={pageSize} country= 'in' category='sports'/> </Route>
          <Route exact path="/technology"><News setProgress =  {setProgress}  apiKey={apiKey} key="technology" pageSize={pageSize} country= 'in' category='technology'/> </Route>
      </Switch>
      </Router>
      </div>
    )  
  }

  export default App

//pageSize={5}   ye props hain hain jo hum kahi b use kre iski value yhi rhegi , news section me use kiya h
// working with     npm install react-router-dom@5.2.0
// React dom version : 5.2.0

// key="anything"   kuch bhi unique daldo else react har component ko ek jaisa smjh lega aur navigate krne k baad bhi reload ni hoga
import React, { PureComponent } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default class App extends PureComponent {
  render() {
    return (
      <div> 
      <Router>
      <NavBar/>
      <Switch>

          <Route exact path="/"><News  key="general" pageSize={6} country= 'in' category='general'/> </Route>
          <Route exact path="/business"><News key="business"  pageSize={6} country= 'in' category='business'/> </Route>
          <Route exact path="/entertainment"><News  key="entertainment" pageSize={6} country= 'in' category='entertainment'/> </Route>
          <Route exact path="/health"><News  key="health" pageSize={6} country= 'in' category='health'/> </Route>
          <Route exact path="/science"><News  key="science" pageSize={6} country= 'in' category='science'/> </Route>
          <Route exact path="/sports"><News  key="sports" pageSize={6} country= 'in' category='sports'/> </Route>
          <Route exact path="/technology"><News key="technology" pageSize={6} country= 'in' category='technology'/> </Route>

      </Switch>
      </Router>
      </div>
    )  
  }
}

//pageSize={5}   ye props hain hain jo hum kahi b use kre iski value yhi rhegi , news section me use kiya h
// working with     npm install react-router-dom@5.2.0
// React dom version : 5.2.0

// key="anything"   kuch bhi unique daldo else react har component ko ek jaisa smjh lega aur navigate krne k baad bhi reload ni hoga
import React, { PureComponent } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default class App extends PureComponent {
    pageSize = 6;
  render() {
    return (
      <div> 
      <Router>
      <NavBar/> 
      <Switch>

          <Route exact path="/"><News  key="general" pageSize={this.pageSize} country= 'in' category='general'/> </Route>
          <Route exact path="/business"><News key="business"  pageSize={this.pageSize} country= 'in' category='business'/> </Route>
          <Route exact path="/entertainment"><News  key="entertainment" pageSize={this.pageSize} country= 'in' category='entertainment'/> </Route>
          <Route exact path="/health"><News  key="health" pageSize={this.pageSize} country= 'in' category='health'/> </Route>
          <Route exact path="/science"><News  key="science" pageSize={this.pageSize} country= 'in' category='science'/> </Route>
          <Route exact path="/sports"><News  key="sports" pageSize={this.pageSize} country= 'in' category='sports'/> </Route>
          <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country= 'in' category='technology'/> </Route>

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
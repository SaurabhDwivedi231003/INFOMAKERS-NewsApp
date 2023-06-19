import React, { PureComponent } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends PureComponent {
    pageSize = 50;
    apiKey = "733ef8b9aa1245a69a7f4c1c0d28ba78"


    state = {
      progress:0
    }
    setProgress = (progress) => {
      this.setState({progress : progress })
    }

  render() {
    return (
      <div> 
      <Router>
      <NavBar/>  
      <LoadingBar color='#D72F2F' height={3}   progress={this.state.progress}  />
      <Switch>
          <Route exact path="/"><News setProgress =  {this.setProgress}  apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country= 'in' category='general'/> </Route>
          <Route exact path="/business"><News setProgress =  {this.setProgress}  apiKey={this.apiKey} key="business"  pageSize={this.pageSize} country= 'in' category='business'/> </Route>
          <Route exact path="/entertainment"><News setProgress =  {this.setProgress}  apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country= 'in' category='entertainment'/> </Route>
          <Route exact path="/health"><News setProgress =  {this.setProgress}  apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country= 'in' category='health'/> </Route>
          <Route exact path="/science"><News setProgress =  {this.setProgress}  apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country= 'in' category='science'/> </Route>
          <Route exact path="/sports"><News setProgress =  {this.setProgress}  apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country= 'in' category='sports'/> </Route>
          <Route exact path="/technology"><News setProgress =  {this.setProgress}  apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country= 'in' category='technology'/> </Route>
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
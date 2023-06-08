import React, { PureComponent } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends PureComponent {
  render() {
    return (
      <div>
      <NavBar/>
      <News pageSize={6} country= 'in' category='health'/>  

      </div>
    )  
  }
}

//pageSize={5}   ye props hain hain jo hum kahi b use kre iski value yhi rhegi , news section me use kiya h
 
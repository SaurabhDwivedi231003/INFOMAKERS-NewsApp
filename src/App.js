import React, { PureComponent } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends PureComponent {
  render() {
    return (
      <div>
      <NavBar/>
      <News/>

      </div>
    )  
  }
}
 
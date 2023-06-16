import React, { PureComponent } from 'react'
import loading from './loading.gif'


export default class Spinner extends PureComponent {
  render() {
    return (
      <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  }
}

//import loading from './loading.gif'    : aise import krte hain kisi b file ko 
// aur wahi 'loading' img src={loading} me bhi use kiya
 
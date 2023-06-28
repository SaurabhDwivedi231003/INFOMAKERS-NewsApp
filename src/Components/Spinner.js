import React from 'react'
import loading from './loading.gif'


  const Spinner = () =>  {
    return (
      <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner

//import loading from './loading.gif'    : aise import krte hain kisi b file ko 
// aur wahi 'loading' img src={loading} me bhi use kiya
 
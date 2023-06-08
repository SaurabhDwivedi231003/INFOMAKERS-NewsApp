import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
  static propTypes = {}

  render() {
    return ( 
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
     <a className="navbar-brand" href="/">NewsMonkey</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a> </li>

        <li className="nav-item"> <a className="nav-link" href="/about">About</a>  </li>
            <li className="nav-item"> <a className="nav-link" href="/about">Business</a> </li>
            <li className="nav-item"> <a className="nav-link" href="/about">Entertainment</a>  </li>
            <li className="nav-item"> <a className="nav-link" href="/about">General</a>  </li>
            <li className="nav-item"> <a className="nav-link" href="/about">Health</a>  </li>
            <li className="nav-item"> <a className="nav-link" href="/about">Science</a>  </li>
            <li className="nav-item"> <a className="nav-link" href="/about">Sports</a>  </li>
            <li className="nav-item"> <a className="nav-link" href="/about">Technology</a>  </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div> 
    )
  }
}

export default NavBar
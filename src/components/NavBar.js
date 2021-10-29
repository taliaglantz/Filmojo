import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/white-with-logo.PNG'


const NavBar = () => {


  return (
    <nav className="navbar is-dark" id="navbar">
      <div className="container" id="nav-content">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title" id="logo-img">

            <Link to="/">
              <figure>
                <img src={Logo} width="60" height="60" />
              </figure>
            </Link>

          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className="has-text-white" id="navbar-link" to="/movies">Movie Index</Link>
          </div>
          <button className="button is-danger is-small is-rounded is-outlined" id="shuffle"><Link className="has-text-white" to="/shuffle">Shuffle</Link></button>
        </div>
        <div className="navbar-end">

          <div className="navbar-item"><Link className="has-text-white" id="navbar-link" to="/favourites">🍿 Favourites</Link>
          </div>

        </div>

      </div>


    </nav >


  )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/IMG_0612.PNG'

const NavBar = () => {


  return (
    <nav className="navbar is-dark" id="navbar">
      <div className="container" id="nav-content">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title" id="logo-img">

            <Link to="/">  
              <figure>            
                <img src={Logo} width="48" height="48"/>
              </figure>
            </Link>

          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className="has-text-white" id="navbar-link" to="/movies">Movie Index</Link>
          </div>
          <button onClickclassName="button is-danger is-small is-rounded is-outlined" id="shuffle"><Link className="has-text-white" to="/shuffle">Shuffle</Link></button>
          {/* <div className="select is-link is-small is-rounded" id="select">
            <select>
              <option value="genres">Genres</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
            </select>
          </div> */}
        </div>
        <div className="navbar-end">
          <div className="navbar-item"><Link className="has-text-white" id="navbar-link" to="/favourites">🍿 Favourites</Link></div>
        </div>

      </div>


    </nav>


  )
}

export default NavBar
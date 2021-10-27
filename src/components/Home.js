import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar is-danger" id="curtains">
      <div className="hero-body">

        <div className="container">

          <figure className="image is-3by2">
            <img src="assets/curtain-17437.png"></img>
            <h1 className="title is-1 has-text-centered">
              <span className="logo-emoji" role="img" aria-label="logo">🎬 </span>
              <Link className="has-text-white" id="enter" to="/movies">Enter</Link>
              <span className="logo-emoji" role="img" aria-label="logo"> 🎬</span>
            </h1>
          </figure>

        </div>

      </div>
    </section >
  )





}

export default Home
import React from 'react' 
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar is-danger" id="hero-background">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <span className="logo-emoji" role="img" aria-label="logo">🎬 </span>
            <Link className="has-text-white" to="/movies">Enter</Link>
            <span className="logo-emoji" role="img" aria-label="logo"> 🎬</span>
          </h1>
        </div>
      </div>
    </section>
  )



  

}

export default Home
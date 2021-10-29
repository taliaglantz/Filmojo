import React from 'react'
import { Link } from 'react-router-dom'
import { bounce } from 'react-animations'
import styled, { keyframes } from 'styled-components'


const Home = () => {

  const Bounce = styled.div`animation 2s ${keyframes `${bounce}`} infinite`

  return (
    <section className="hero is-fullheight-with-navbar is-danger" id="curtains">
      <div className="hero-body">
        <div className="container">
          
          <h1 className="title is-1 has-text-centered">
            <Bounce><Link className="has-text-white" id="enter" to="/movies">Enter<br/><span className="filmojo-logo">FILMOJO</span></Link></Bounce>
            
          </h1>
          
        </div>
      </div>
    </section>
  )
}

export default Home
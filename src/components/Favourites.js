import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import MovieCard from './MovieCard'
import { Link, useParams } from 'react-router-dom'


const Favourites = () => {
  const [newMovie, setNewMovie] = useState([])

  const [hasError, setHasError] = useState(false)
  const { id } = useParams()


  const getMovieFromLocalStorage = () => {
    return window.localStorage.getItem('id')
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://imdb-api.com/en/API/Title/k_baoxz6jf/${getMovieFromLocalStorage()}`)
        setNewMovie(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])






  //console.log(getMovieFromLocalStorage())

  return (
    <section className="hero is-fullheight-with-navbar is-dark">
      <div className="columns is-centered">

        <div className="column is-one-quarter-desktop is-one-third-tablet">
          <Link to={`/movies/${id}`}>
            <div className="card">
              <div className="card-header">
                
                <div className="card-header-title title-is-4 has-text-dark">{newMovie.title}</div>
              </div>
              <figure className="image image-is-1by1">
                <img src={newMovie.image} alt={newMovie.title}></img>
              </figure>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Favourites
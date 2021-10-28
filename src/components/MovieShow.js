import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieShow = () => {
  const [movie, setMovies] = useState()
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  // console.log('PARAMS ->', params)
  // console.log('id ->', id)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://imdb-api.com/en/API/Title/k_ey8se4et/${id}`)
        setMovies(data)
        // console.log('response ->', response)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()

  }, [id])

  const setMovieToLocalStorage = (id) => {
    window.localStorage.setItem('id', id)
  }

  console.log('movie ->', movie)

  console.log('MOVIE ON STATE ->', movie)

  return (

    <section className="section" id="show-content">
      <div className="container">
        {movie ?
          <div>
            <h2 className="title has-text-centered has-text-white">{movie.fullTitle}</h2>
            <hr />
            <div className="columns is-multiline">
              <div className="column is-half">
                <figure className="image">
                  <img src={movie.image} alt={movie.image} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4 has-text-white">Plot</h4>
                <p>{movie.plot}</p>
                <hr />
                <h4 className="title is-4 has-text-white">Directors</h4>
                <p>{movie.directors}</p>
                <hr />
                <h4 className="title is-4 has-text-white">Starring</h4>
                <p>{movie.stars}</p>
                <hr />
                <h4 className="title is-4 has-text-white">Genres</h4>
                <p>{movie.genres}</p>
                <hr />
                <h4 className="title is-4 has-text-white">Run Time</h4>
                <p>{movie.runtimeStr}</p>
                <hr />
                <button className="button is-danger is-rounded is-outlined" onClick={setMovieToLocalStorage(id)}>FAVOURITE</button>
                <hr />
              </div>
            </div>


            <h4 className="title is-4">Similar</h4>
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="card">
                  <figure className="image image-is-3by4">
                    <img src={movie.similars[1].image} alt={movie.similars[1].title}></img>
                  </figure>
                  <div className="card-header">
                    <div className="card-header-title title is-7">{movie.similars[1].title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          :

          <h2 className="title has-text-centered">
            {hasError ? 'Oops, something went wrong...' : 'Loading your movie 📽'}
          </h2>

        }

      </div>
    </section>

  )
}
export default MovieShow
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieShow = () => {
  const [movie, setMovies] = useState()
  const [favourites, setFavourites] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  // console.log('PARAMS ->', params)
  // console.log('id ->', id)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://imdb-api.com/en/API/Title/k_baoxz6jf/${id}`)
        setMovies(data)
        // console.log('response ->', response)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
    getMovieFromLocalStorage()

  }, [id])
 

  const getMovieFromLocalStorage = () => {
    const retrievedData = window.localStorage.getItem('favourites')
    console.log('retrieved', retrievedData)
    if (!retrievedData) return
    const faves = JSON.parse(retrievedData)
    console.log('faves', faves)
    setFavourites(faves)
  }

  const setMovieToLocalStorage = (event) => {
    console.log('event target id', event.target.id)
    const newFavourite = event.target.id
    const newFaves = [...favourites, newFavourite]
    console.log('new faves', newFaves)
    const addFave = JSON.stringify(newFaves)
    console.log('add fave', addFave)
    window.localStorage.setItem('favourites', addFave)
  }

  console.log('movie ->', movie)

  //console.log('MOVIE ON STATE ->', movie)
  console.log('FAVOURITE', favourites)

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
                <button ID={movie.id} className="button is-danger is-rounded is-outlined" onClick={setMovieToLocalStorage}>FAVOURITE</button>
                <hr />
              </div>
            </div>

            <div>
              <h4 className="title is-4 has-text-white has-text-centered">More like this</h4>

              <div className="columns">
                <div className="column is-one-quarter">
                  <div className="card">
                    <figure className="image image-is-1by2">
                      <img src={movie.similars[0].image} alt={movie.similars[0].title}></img>
                    </figure>
                    <div className="card-header">
                      <div className="card-header-title title-is-7">{movie.similars[0].title}</div>
                    </div>
                  </div>
                </div>

                <div className="column is-one-quarter">
                  <div className="card">
                    <figure className="image image-is-1by2">
                      <img src={movie.similars[1].image} alt={movie.similars[1].title}></img>
                    </figure>
                    <div className="card-header">
                      <div className="card-header-title title-is-7">{movie.similars[1].title}</div>
                    </div>
                  </div>
                </div>

                <div className="column is-one-quarter">
                  <div className="card">
                    <figure className="image image-is-3by4">
                      <img src={movie.similars[2].image} alt={movie.similars[2].title}></img>
                    </figure>
                    <div className="card-header">
                      <div className="card-header-title title-is-7">{movie.similars[2].title}</div>
                    </div>
                  </div>
                </div>

                <div className="column is-one-quarter">
                  <div className="card">
                    <figure className="image image-is-3by4">
                      <img src={movie.similars[3].image} alt={movie.similars[3].title}></img>
                    </figure>
                    <div className="card-header">
                      <div className="card-header-title title-is-7">{movie.similars[3].title}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          :
          <h2 className="title has-text-centered">
            {hasError ? 'Oops, something went wrong...' : 'Loading your movie :film_projector:'}
          </h2>
        }

      </div>
    </section>
  )
}
export default MovieShow
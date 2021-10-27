import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

  const setIdToLocalStorage = (id) => {
    window.localStorage.setItem('id', id)
  }

  console.log('id ->', id)

  console.log('MOVIE ON STATE ->', movie)

  return (
    <section className="section">
      <div className="container">
        {movie ?
          <div>
            <h2 className="title has-text-centered">{movie.fullTitle}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={movie.image} alt={movie.image} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">Plot</h4>
                <p>{movie.plot}</p>
                <hr />
                <h4 className="title is-4">Directors</h4>
                <p>{movie.directors}</p>
                <hr />
                <h4 className="title is-4">Starring</h4>
                <p>{movie.stars}</p>
                <hr />
                <h4 className="title is-4">Genres</h4>
                <p>{movie.genres}</p>
                <hr />
                <h4 className="title is-4">Run Time</h4>
                <p>{movie.runtimeStr}</p>
                <hr />
                <button className="button is-danger is-rounded" onClick={setIdToLocalStorage(movie.id)}>FAVOURITE</button>
                <hr />
              </div>
              {/* <div className="column is-full">
                <h4 className="title is-4">Similar</h4>
                <p>{movie.similars.title}</p>
              </div> */}
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
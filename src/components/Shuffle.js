import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Shuffle = () => {
  const [movies, setMovies] = useState([])
  const [hasError, setHasErrors] = useState(false)


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_0vc4n4g6')
        setMovies(data.items)
        console.log('data items ->', data.items)
      } catch (error) {
        setHasErrors(hasError)
      }
    }

    getData()

  }, [])


  const randomNumber = Math.floor(Math.random() * 250)



  console.log('movies ->', movies)



  return (
    <>

      <section className="hero is-fullheight-with-navbar is-dark" id="curtains">
        <div className="columns is-centered">

          <div className="column is-one-quarter-desktop is-one-third-tablet">
            {movies.length ?
              <Link to={`/movies/${movies[randomNumber].id}`}>
                <div className="card" id="shufflecard">
                  <figure className="image image-is-1by1">
                    <img src={movies[randomNumber].image} alt={movies[randomNumber].title}></img>
                  </figure>
                  <div className="card-header">
                    <div className="card-header-title title is-4 has-text-white">{movies[randomNumber].title}</div>
                  </div>
                </div>
              </Link>
              :
              <h2 className="title has-text-centered">
                {hasError ? 'Oops, something went wrong...' : 'Loading your movie :film_projector:'}
              </h2>
            }

          </div>
        </div>
      </section>
    </>



  )
}
export default Shuffle
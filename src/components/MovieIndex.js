import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'


const MovieIndex = () => {

  const [movies, setMovies] = useState([])
  const [hasError, setHasErrors] = useState(false)
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_ey8se4et')
        setMovies(data.items)
        console.log('data items ->', data.items)
      } catch (err) {
        setHasErrors(true)
      }
    }
    getData()
  }, [])


  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {movies.map(movie => {
            return (

              <MovieCard key={movie.id} {...movie} />

            )
          })}


        </div>

        <h2 className="title has-text-centered">
          {hasError ? 'Something has gone wrong!' : 'loading...'}
        </h2>

      </div>
    </section>


  )
}

export default MovieIndex
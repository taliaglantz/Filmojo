import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import Home from './components/Home'

const App = () => {

  const [movies, setMovies] = useState([])
  const [hasError, setHasErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {

      try {
        const { data } = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_0vc4n4g6')
        setMovies(data.items)
      } catch (err) {
        setHasErrors(true)
      }
    }
    getData()
  }, [])

  //console.log('movies on state->', movies)
  return (
    <>
      <section className="section">
        <div className="container">
          {movies.length ?
            <div className="columns is-multiline">
              {movies.map(movie => {
                return (
                  <p key={movie.id}>{movie.title}</p>
                )

                // console.log(movie.id)



              })}

            </div>
            :
            <h2 className="title has-text-centered">
              {hasError ? 'Something has gone wrong!' : 'loading...'}
            </h2>
          }
        </div>
      </section>
    </>
  )
}


export default App

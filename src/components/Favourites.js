import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
// import { Link, useParams } from 'react-router-dom'


const Favourites = () => {
  const [newMovie, setNewMovie] = useState([])
  const [newArray, setNewArray] = useState(null)
  const [favourites, setFavourites] = useState([])
  const [hasError, setHasError] = useState(false)
  // const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_baoxz6jf/')
        setNewMovie(data.items)
        console.log(data.items)
      } catch (err) {
        setHasError(true)
      }
      getMovieFromLocalStorage()
    }
    getData()
  }, [])

  const getMovieFromLocalStorage = () => {
    const retrievedData = window.localStorage.getItem('favourites')
    const arrayData = JSON.parse(retrievedData)
    console.log('array data', arrayData)
    setFavourites(arrayData)
  }

  useEffect(() => {
    console.log('newMovie', newMovie)
    try {
      const filteredMovies = newMovie && newMovie.filter((movie) => {
        return favourites.includes(movie.id)
      })
      console.log('Im the filtered movies!', filteredMovies)
      setNewArray(filteredMovies)
      console.log(newArray)
    } catch (err) {
      setHasError(true)
    }
    //setInterval()
  }, [favourites])

  // setInterval(() => {
  //   window.localStorage.clear()
  // }, 30000)


  console.log(favourites)
  console.log('newArray', newArray)



  return (
    <>
      <section className="section is-medium" id="index">
        <div className="container">
          {newArray ?
            <div className="columns is-multiline">
              {newArray.map(movie => {
                return <MovieCard key={movie.id} {...movie} />
              })}
            </div>
            :
            <h2 className="title has-text-dark">
              {hasError ? 'Oops, something has gone wrong!' : 'Loading movies...'}
            </h2>
          }
        </div>
      </section>
    </>
  )
}

export default Favourites
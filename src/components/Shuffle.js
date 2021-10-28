import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shuffle = () => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_0vc4n4g6')
        setMovies(data.items)
        //console.log('data items ->', data.items)
      } catch (error) {
        console.log('Error', error)
      }
    }
    getData()
  }, [])

  const getRandomMovie = () => {
    const randomNumber = Math.floor(Math.random() * 250)
    //console.log(randomNumber)
  }


  getRandomMovie()
  return (

    <section className="section" id="index">
      <div className="container">
        <div className="columns is-multiline">

          <div className="column is-one-quarter-desktop is-one-third-tablet">
            <div className="card">
              <figure className="image image-is-3by4">
                <img src={movies[1].image} alt={movies[1].title}></img>
              </figure>
              <div className="header">
                <div className="card-header-title title is-7">{movies[1].title}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>


  )
}
export default Shuffle
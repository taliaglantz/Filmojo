import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shuffle = () => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    const getData = async () => {
      // try {
      const { data } = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_dn1qbg6q')
      setMovies(data.items)
      //console.log('data items ->', data.items)
      // } catch (error) {
      // console.log('Error', error)
      // }
    }
    getData()
  }, [])


  const randomNumber = Math.floor(Math.random() * 250)


  console.log(movies[randomNumber])


  return (
    <section className="hero is-fullheight-with-navbar is-dark">
      <div className="columns is-centered">

        <div className="column is-one-quarter-desktop is-one-third-tablet">

          <div className="card">
            <div className="card-header">

              <div className="card-header-title title-is-4 has-text-dark">{movies[randomNumber].title}</div>
            </div>
            <figure className="image image-is-1by1">
              <img src={movies[randomNumber].image} alt={randomNumber.title}></img>
            </figure>
          </div>

        </div>
      </div>
    </section>



  )
}
export default Shuffle
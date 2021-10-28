import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Shuffle = () => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_baoxz6jf')
        setMovies(data.items)
        //console.log('data items ->', data.items)
      } catch (error) {
        console.log('Error', error)
      }
    }
    getData()
  }, [])


  const randomNumber = Math.floor(Math.random() * 250)


  console.log(movies[randomNumber])


  return (

    <section className="section" id="index">

      <div className="container">

        <div className="columns is-multiline">

          <div className="column is-one-quarter-desktop is-one-third-tablet">

            <div className="card">
              <figure className="image image-is-3by4">
                <img src={movies[randomNumber].image} alt={movies[randomNumber].title}></img>
              </figure>
              <div className="header">
                <div className="card-header-title title is-7">{movies[randomNumber].title}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </section >

  )
}
export default Shuffle
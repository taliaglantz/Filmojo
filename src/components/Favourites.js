import React, { useState } from 'react' 
// import { Link } from 'react-router-dom'


const Favourites = () => {
  const [newMovie, setNewMovie] = useState([])


  const getIdFromLocalStorage = () => {
    return window.localStorage.getItem('id')
  }

  // const addNewMovie = () =>




  return (
    <div>
      {getIdFromLocalStorage()}
    </div>

  )
}

export default Favourites
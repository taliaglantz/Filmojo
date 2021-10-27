import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ id, rank, title, image }) => {
  // console.log('id ->', id)

  return (
    <div key={id} className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/movies/${id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-subtitle title is-5">{rank}</div>
            <div className="card-header-title title is-4">{title}</div>
          </div>
          <figure className="image image-is-1by1">
            <img src={image} alt={title}></img>
          </figure>
        </div>
      </Link>
    </div>


  )
}

export default MovieCard
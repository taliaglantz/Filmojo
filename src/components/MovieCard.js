import React from 'react'
import { Link } from 'react-router-dom'
const MovieCard = ({ id, rank, title, image }) => {
  // console.log('id ->', id)

  return (
  
    <div key={id} className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/movies/${id}`}>
        <div className="card">
          <figure className="image image-is-1by2">
            <img src={image} alt={title}></img>
          </figure>
          <div className="card-header">

            <div className="card-subtitle title is-7">{rank}
              <div className="card-header-title title is-7">{title}</div>
            </div>
          </div>

        </div>
      </Link>
    </div>
    
  )
}
export default MovieCard
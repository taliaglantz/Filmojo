import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import MovieIndex from './components/MovieIndex'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieShow from './components/MovieShow'
import Favourites from './components/Favourites'

const App = () => {
  // console.log('movies on state->', movies)
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/movies" component={MovieIndex}/>
        <Route exact path="/movies/:id" component={MovieShow}/>
        <Route exact path="/favourites" component={Favourites}/>

      </Switch>
      
      
      
      
    </BrowserRouter>
     

      
    
  )
}
export default App
// Movies/Netflix style film list

// Enter screen showing user going into the cinema

// Once in cinema, display all top 250 movies in cheesebored/tile style
// this API is the 250 top movies one

// click on movie and it takes you to that movie’s page
// this is a different API which takes in the movies’ ID
// full description (plot, actors, directors etc.) on movie page
// similar movies also displayed as cards at bottom - ability to click on these too - take you to that movie’s page
// ability to “favourite” a movie - this will get added ot favourites list

// NavBar
// Movie roulette button -> this would take you to a random movie’s page
// Favourite films page
// Get filtering to work - genre, directors etc.

// Styling
// Curtains upon entering cinema
// 1920s theme
// art deco style

// Day-to-day planning

// Wednesday

// Day

// build out movie card
// use same bulma for now then change it all later?
// move movie card to seperate file
// move MovieIndex to seperate file
// create home file
// create routes in app.js
// ensure links are all set up

// Eve

// Bulma and design

// Thursday

// Day

// Display similar movies as cards at bottom
// Ability to favourite certain movies and add to list
// random movie generator
// filtering

// Eve

// Bulma

// Notes

// Favourites
// we already have the ability to store and retrieve and id 
// we can display this id as a card on the page
// we want to be able to display more than one card on the page
// we need to ADD to the favourite item we have already displayed


// Similar cards
// we already have been able to display the names of the similar cards
// we want to be able to display the infomration in cards and have the abiblity to click on them, which would take you to that card's page


<div className="column is-11 is-offset-1">
<h4 className="title is-4">Similar</h4>
<div className="columns">
  <div className="column is-one-quarter">
    <div className="card">
      <figure className="image image-is-3by4">
        <img src={movie.similars[1].image} alt={movie.similars[1].title}></img>
      </figure>
      <div className="card-header">
        <div className="card-header-title title is-7">{movie.similars[1].title}</div>
      </div>
    </div>
  </div>
</div>
</div>


# General Assembly Project 2: Filmojo

<img src="src/assets/grey-logo.PNG" alt="filmojo logo" width=300/>

## Table of Contents
- [Overview](#overview)
- [Brief](#brief)
- [Technologies used](#technologies-used)
- [Planning](#planning)
- [Build](#build)
- [Known bugs](#known-bugs)
- [Wins and Challenges](#wins)
- [Future features](#future-features)
- [Key learnings](#key-learnings)

<a name="overview"></a>
## Overview
Filmojo was my second project created during General Assembly’s Software Engineering Immersive Course, , which I completed from September-December 2021.

<strong>The goal:</strong> pair-programme the build of a React application that consumes a public API.

Filmojo is an app that uses two IMDb APIs to list the top 250 movies. The app was created in a 48-hour pair-coded hackathon and it was my first experience of using public APIs and React. 


### Timeframe
2-day Hackathon

### Deployed link
https://filmojo-app.netlify.app/ 

### Getting started
1. Either clone or download the source code.
2. Install yarn in terminal by running `yarn`.
3. Start server by running `yarn start`.

<a name="brief"></a>
## Brief

Your app must:

* Consume a public API – this could be anything but it must make sense for your project.
* Have several components
* The app can have a router - with several "pages", this is up to you and if it makes sense for your project.
* Include wireframes - that you designed before building the app.
* Be deployed online and accessible to the public (hosted on your public github, not GA github!)
​

<a name="technologies-used"></a>
## Technologies used

### Front-end:
- React.js
- JavaScript (ES6)
- Axios
- HTML5
- CSS
- Bulma CSS Framework
- React-router-dom for component-based routing
- react-animations for implementation of animations

### APIs:
- Top250Movies and Title - both from https://imdb-api.com/ 

### Dev tools:
- Yarn
- Insomnia
- Google Chrome dev tools
- Netlify (deployment)

<a name="build"></a>
## Build

### Planning
#### See Wireframe.js

With my total lack of ability to ever pick something on TV and my partner’s love of all things film, we thought it would be a great idea to create a film-based app that uses an IMDb API to list their top films. We really liked how the Title API displays intricate detail on each film, especially the “similar movies” section, so we decided to use this API when each film is clicked on. 
Considering this was a hackathon, so we were limited on time, and neither of us had much experience with wireframe sites, we decided to plan using some good old pseudocode. We mapped out our desired key features and managed our time by planning out our tasks. 
Finally, we tested our APIs on Insomnia so we could assess exactly which data we would like to display on our app.

### Homepage
We wanted to keep the homepage super simple, and look like a 1920s movie theatre entrance. The animation on the logo in the centre built using `react-animations` brings the page to life and entices the viewer.

```const Bounce = styled.div`animation 2s ${keyframes `${bounce}`} infinite```

<img src="src/assets/screenshots/Screenshot 2022-01-09 at 17.57.10.png" alt="homepage"/>


#### Top movies page
The MovieIndex.js component displays all 250 movies from the API, retrieved by a GET request made by axios. Each movie is displayed on its own card and we chose for them to be displayed in a similar style to Netflix, with the shadowed numbers on one side of each card. 

<img src="src/assets/screenshots/Screenshot 2022-01-09 at 18.07.02.png" alt="movie index page"/>

#### Movie show page
The Title API, suffixed with the movie’s ID, is how each movie is displayed in detail on its own page. At the bottom of each page is a section that displays other movies within the same genre that are clickable and will take you to that movie’s own page. 

<img src="src/assets/screenshots/Screenshot 2022-01-09 at 18.10.49.png" alt="similar items"/>

The ability for the user to favourite a film was built using local storage. It is on this component that the function `setMovieToLocalStorage` exists, which sends the id of the film to local storage as an array, if it is “favourited” by the user. 
```
const setMovieToLocalStorage = (event) => {
    console.log('event target id', event.target.id)
    const newFavourite = event.target.id
    const newFaves = [...favourites, newFavourite]
    console.log('new faves', newFaves)
    const addFave = JSON.stringify(newFaves)
    console.log('add fave', addFave)
    window.localStorage.setItem('favourites', addFave)
  }
``` 

#### Favourites page
Here, the getMovieFromLocalStorage function pulls the array of movie IDs down from local storage. 

```
const getMovieFromLocalStorage = () => {
    const retrievedData = window.localStorage.getItem('favourites')
    const arrayData = JSON.parse(retrievedData)
    console.log('array data', arrayData)
    setFavourites(arrayData)
  }
```
If they match the id of a movie from the API, they are displayed on the page as a card. Each card is clickable as well.
```
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
```
#### Navbar and Shuffle
The NavBar is low-key and hosts our bespoke logo. The shuffle feature is simple, yet effective and is built using the `randomNumber` generator variable. It was created to be similar to the Netflix "Not sure what to watch" feature (a genius and tremendously helpful argument preventative feature in my opinion). 

```const randomNumber = Math.floor(Math.random() * 250)```

<a name="known-bugs"></a>
## Known bugs
The images in both the “favourites” and “top movies” components are sometimes blurry.

<a name="wins"></a>
## Wins and Challenges
This was our first experience with a CSS Framework and so we wanted the app to look really <strong>slick</strong>, which I believe is a style we definitely achieved! It definitely was a challenge learning about a framework and using it for the first time on a hackathon. We had never used local storage before either so we were keen to learn how to use it. Using this to form the “favourites” component was really challenging and slightly more complicated than we had originally anticipated, however made total sense once we had figured it out. Another challenge was that the IMDb APIs we chose had limits on the number of calls you could make per day. This proved particularly challenging as we would often get error messages and would have to work out if our code was wrong or we had reached our limit on the number of calls we made (more often than not it was the latter)! 

<a name="future-features"></a>
## Future features
If we had more time, we would have loved to have created filters for the films, especially one for genre. We would have also liked to display the characters featured in the films and have the functionality to show other films with that character in. With more time we would have also made the app responsive.


<a name="key-learnings"></a>
## Key learnings
KISS (keep it simple stupid) was the main learning I took from this project. We created a very simple and straightforward app that looked professional and was styled suitably. Although we pair-programmed throughout the software engineering course during various workshops and homeworks, we had never never done so on a project, until now. I developed my verbal problem solving and communication skills, and also, through spending time with my partner and learning about their strengths and challenges, how to work efficiently in a pair.

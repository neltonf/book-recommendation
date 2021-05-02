import React, { useState } from 'react'
import './App.css'

var movieGenre = {
  Horror: [
    { name: 'Silence', raiting: '4/5' },
    { name: 'Underwater', raiting: '5/5' },
    { name: 'Us', raiting: '3/5' },
  ],
  Action: [
    { name: 'Red', raiting: '3/5' },
    { name: 'TENET', raiting: '5/5' },
    { name: 'Venom', raiting: '4.5/5' },
  ],
  Comedy: [
    { name: 'Bay Watch', raiting: '4/5' },
    { name: 'Jumanji', raiting: '5/5' },
  ],
}

var movie = Object.keys(movieGenre)

export default function App() {
  var [userMovie, setUserMovie] = useState('Horror')

  function movieClickhandler(setMovieGenre) {
    setUserMovie(setMovieGenre)
  }

  return (
    <div className="App">
      <h1> Hello</h1>
      <h2>Welcome to the Movie recommendation BOT 🤖</h2>
      <hr />
      <ul>
        {movie.map(function (setMovieGenre) {
          return (
            <span
              onClick={() => movieClickhandler(setMovieGenre)}
              style={{ fontSize: '1.5rem', padding: '0.5rem' }}
              key={setMovieGenre}
            >
              {setMovieGenre}
            </span>
          )
        })}
      </ul>
      <hr />
      <div>
        {movieGenre[userMovie].map(function (setMovie) {
          return (
            <div className="box" key={setMovie}>
              <h2>{setMovie.name}</h2>
              <p>{setMovie.raiting}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

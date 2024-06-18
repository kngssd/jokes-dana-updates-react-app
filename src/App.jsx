
import Joke from "./Joke.jsx"
import jokesData from "./jokesData.jsx"
import React from "react"

export default function App () {
  const jokeElements = jokesData.map(joke => {
    return <Joke 
    key = {joke.id}
    setup = {joke.setup} 
    punchline = {joke.punchline}/>
  }
)

  return (
    <div>
      <h1>Dana's Jokes</h1>
      {jokeElements}
    </div>
  );
}


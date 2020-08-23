import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Jasim', 'Jafor-Iqbal','Sakib Khan']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Hero name={heros[0]} age='56'></Hero>
      <Hero name={heros[1]}></Hero>
      <Hero name={heros[2]}></Hero>
      <Hero></Hero>
      <Hero></Hero>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount]= useState(0);
  const handleClick = () => setCount(count + 1)
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movie: {count} </h3>

      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted:{props.movies} </h4>
}

function Hero(props){
  //console.log(props.name);
  const heroStyle = {
    border: '3px solid red',
    margin: '5px',
    borderRadius: '10px'
  }
  return (
      <div style={heroStyle}>
        <h1>I am hero-{props.name}</h1>
  <h3>I have done 5 movies in {props.age || 30}</h3>
      </div>
  )
}

export default App;

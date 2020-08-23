import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [{name: 'Jasim', age: 60}, {name: 'JaforIqbal', age: 60}, {name: 'SakibKhan', age: 60},{name: 'OmorSunny', age: 60}, {name: 'Alomgir', age: 60}];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
      nayoks.map(nk => <Nayok name={nk.name}></Nayok>)
      }
      {/* <Nayok name={nayoks[0]} age='56'></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok> */}
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

function Nayok(props){
  //console.log(props.name);
  const nayokstyle = {
    border: '3px solid red',
    margin: '5px',
    borderRadius: '10px'
  }
  return (
      <div style={nayokstyle}>
        <h1>I am Nayok-{props.name}</h1>
  <h3>I have done 5 movies in {props.age || 30}</h3>
      </div>
  )
}

export default App;

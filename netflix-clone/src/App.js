import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests';


function App() {
  return (
    <div className="App">
    <h1>yasas's first learning react project</h1>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;

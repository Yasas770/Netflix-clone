import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests'; 
import Banner from './Banner.js';
import Nav from './Nav.js';
import footer from './footer.js';




function App() {
  return (
    <div className="app">

  
     <Nav> </Nav>
    <Banner> </Banner>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow></Row>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    <footer></footer>
    </div>
  );
}

export default App;

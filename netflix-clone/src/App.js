import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests'; 
import Banner from './Banner.js';
import Nav from './Nav.js';
import Footer from './footer.js';




function App() {
  return (
    <div className="app">

  
     <Nav> </Nav>
    <Banner> </Banner>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow></Row>
     <hr className="breaker"></hr>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    <hr className="breaker"></hr>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
    <hr className="breaker"></hr>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
    <hr className="breaker"></hr>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    <hr className="breaker"></hr>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
    <hr className="breaker"></hr>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
    <hr className="breaker"></hr>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    <hr className="breaker"></hr>
    <Footer></Footer>
    </div>
  );
}

export default App;

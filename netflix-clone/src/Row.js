import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';




const base_url = 'http://image.tmdb.org/t/p/original';
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

     useEffect(() =>{ 
         //if [] run once when the row loads, and don't run again

        async function fetchData(){
                const request =await axios.get(fetchUrl);
                //"https://api.themoviedb.org/3
                console.log(request.data.results);
                setMovies(request.data.results);
                return request;
   
        }
        fetchData();

     },[fetchUrl]);

     console.log(movies);

     const opts ={
         height:"390",
         width:"100%",
         playerVars:{
             autoplay:1,
         },
     };

     const handleClick = (movie) => {
        console.log(movie, 'movie');


         if(trailerUrl ){
         setTrailerUrl("") ;
         

     }else{
        console.log("check")
         movieTrailer(movie?.title|| movie?.name || "" )
         .then((url) =>{
            console.log("check")

          const urlParams =new URLSearchParams(new URL(url).search); 
          setTrailerUrl(  urlParams.get('v'));
          console.log("check")
         })
         .catch((error) => console.log(error));
     }
    };
    


     

    return (
        <div className="row"> 
            <h2>{title}</h2>
           
           <div className="row__posters">
            {/* several row__posters */}
             {movies.map( movie=>(
                    <img 
                    Key={movie.id}
                    onClick={ () => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ?movie.poster_path:movie.backdrop_path}`}
                     alt={movie.name}/>
             
            ))}
           </div>
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
    )
}

export default Row;

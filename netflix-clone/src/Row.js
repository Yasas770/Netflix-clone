import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';


const base_url = 'http://image.tmdb.org/t/p/original';
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);

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


     

    return (
        <div className="row"> 
            <h2>{title}</h2>
           
           <div className="row__posters">
            {/* several row__posters */}
             {movies.map( movie=>(
                    <img 
                    Key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ?movie.poster_path:movie.backdrop_path}`}
                     alt={movie.name}/>
             
            ))}
           </div>
            {/* container -> posters */}
            

        </div>
    )
}

export default Row;

import React, {useState, useEffect} from 'react';
import axios from './axios';


function Row({title,fetchUrl}) {
    const [movies,setMovies] = useState('');

     useEffect(() =>{ 
         //if [] run once when the row loads, and don't run again

        async function fetchData(){
                const request =await axios.get(fetchUrl);
                //"https://api.themoviedb.org/3
                console.log(request);
                setMovies(request.data.result);
                return request;
                
        }
        fetchData();

     },[fetchUrl])

     console.log(movies);

    return (
        <div>
            <h2>{title}</h2>
           
            {/* container -> posters */}
            

        </div>
    )
}

export default Row;

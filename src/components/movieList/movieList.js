import React, { useEffect, useState } from 'react'
import Cards from '../card/card'
import './movieList.css'
import { useParams } from 'react-router-dom'


const MovieList=()=>{
    const [movieList,setmovieList]=useState([])
    const{type}=useParams()


// We have called the getdata according to type of url path(Params)
   useEffect(()=>{
    getData()
   },[type])


   const getData =()=>{
    fetch(
        `https://api.themoviedb.org/3/movie/${type ? type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
        //  The data we get is converted into json form
        .then((res) => res.json())
        //  As we get the data send it to the setstate
        .then((data) => setmovieList(data.results));
   }

   return(
    <div className='movie__list'>
        <h2 className='list__title'>{(type ? type:"Popular").toUpperCase()}</h2>
        <div className='list__cards'>
            {
                movieList.map(movie=>(
    //  Rendering Cards component               
                    <Cards movie={movie}/>
                ))
            }
        </div>
    </div>
   )
}
export default MovieList 


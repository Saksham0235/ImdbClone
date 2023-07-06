import React,{useEffect,useState} from "react";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import "./card.css"
import {Link} from "react-router-dom"
// import {Blurhash} from 'react-blurhash'
import "react-loading-skeleton/dist/skeleton.css";

const Cards =({movie})=>{
     
    const [loading,setloading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setloading(false)
        },1500)
    },[])





return (
<>
{
    loading
     ? 
    //  For first 1.5 sec we will see the loading feature 
    <div className="cards">
        <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={1} />
        </SkeletonTheme>
    </div>
//     <ClipLoader
//     color={"#808080"}
//     loading={loading}
//     // cssOverride={override}
//     size={150}
//     aria-label="Loading Spinner"
//     data-testid="loader"
//   />
    :
// Then after 1.5 sec we will see the cards

    <Link to={`/movie/${movie.id}`} style={{color:"white"}}>
        <div className="cards">

            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path:""}`} />
            <div className="cards__overlay">
                <div className="cards__title">
                    {movie?movie.original_title:""}
                </div>
                <div className="cards__runtime">
                {movie?movie.release_date:""}
                <span className="card__rating" >
                    {movie?movie.vote_average:""}<i className="fas fa-star"/>
                </span>
                </div>
                <div className="cards__description">
                    {movie?movie.overview.slice(0,118) + "...":""}
                </div>
            </div>
        </div>
    </Link>
}
</>
)

}
export default Cards




import axios from "axios"
import { useEffect, useState } from "react"
import "./home.css"

export const Debounce =()=>{
    const [movie,setMovie] =useState([])
   // const [search,setSearch] =useState([])
    let wait;
   
   useEffect(()=>{
        getData2()
   },[])
   
   const getData=()=>{
       let search2 =document.getElementById("data").value
   axios.get(`http://www.omdbapi.com/?apikey=199dc310&s=${search2}`).then((el)=>{
       
        // console.log(el.data.Search)
      //  setSearch([...el.data.Search])
     setMovie([...el.data.Search])
     })
   }
   const getData2=()=>{
    let search2 =document.getElementById("data").value
axios.get(`http://www.omdbapi.com/?apikey=199dc310&s=avengers`).then((el)=>{
    
     // console.log(el.data.Search)
     setMovie([...el.data.Search])
 
  })
}

   let debounce =(func,delay)=>{

    if(wait){
        clearTimeout(wait)
    }
    wait =setTimeout(()=>{
         func()
    },delay)
   }
    return (
        <div>
            <input type="text" id="data" placeholder="search here" onInput={()=>debounce(getData,2000)}  />
            <h2>Search results</h2>
            <div className="search_result">
                {movie.map((e)=>(
                    <div className="movie_div">
                       <img src={e.Poster} alt="" />
                       <h2> {e.Title}</h2>
                       <h3>Released year : {e.Year}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
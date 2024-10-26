import React, { useState } from "react";
import MovieList from "../components/MovieList"
import axios from "axios"


function Home() {
    const [movies, setMovies] =useState([]);
    const [searchTerm, setSearchTerm] =useState("");

    const fetchMovies = async() =>{
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9aec5b1d85a32429e920d4613c6c7168&query=${searchTerm}`);
        setMovies(response.data.results);
    };

    const handleSearch = (e) =>{
        e.preventDefault();
        fetchMovies();
    };

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input
                type="text"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="search for movies"/>
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies}/>
            
        </div>
    );
}

export default Home;
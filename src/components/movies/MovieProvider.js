import { useState, createContext } from "react";

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        return fetch(`http://localhost:8000/movies?userId=${sessionStorage.getItem('app_user_id')}`)
            .then(response => response.json())
            .then(setMovies)
    }

    const getMovieById = (movieId) => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=de6e2e3c868825bb8d70b7a80a8d1751`)
            .then(res => res.json())
    }



    return (
        <MovieContext.Provider value={{
            movies, getMovies, getMovieById
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
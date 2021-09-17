import { useState, createContext } from "react";

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    // console.log('process.env.REACT_APP_API_KEY: ', process.env.REACT_APP_API_KEY);
    const [movies, setMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const API_KEY = process.env.REACT_APP_WATCHTHIS_API_KEY

    // const getMovies = () => {
    //     return fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
    //         .then(response => response.json())
    //         .then(setMovies)
    // }

    const getUpcomingMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(setUpcomingMovies)
    }



    return (
        <MovieContext.Provider value={{
            movies, getUpcomingMovies, upcomingMovies
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
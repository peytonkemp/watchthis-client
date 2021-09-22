import { useState, createContext } from "react";

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    // console.log('process.env.REACT_APP_API_KEY: ', process.env.REACT_APP_API_KEY);
    const [movies, setMovies] = useState([])
    const [movie, setMovieDetail] = useState({})
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [latestMovie, setLatestMovie] = useState({})
    const API_KEY = process.env.REACT_APP_WATCHTHIS_API_KEY
    const [genres, setGenres] = useState([])

    
    const getMovieById = (movieId) => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then(res => res.json())
    }

    const discoverMovie = (genre, watchProvider, runtime) => {
        return fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${API_KEY}&with_genres=${genre}&with_watch_providers=${watchProvider}&with_runtime.lte=${runtime}&with_original_language=en`)
            .then(res => res.json())
            .then((movieArray) => {
                setMovieDetail(movieArray.results[0])
            })
    }

    const getUpcomingMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(setUpcomingMovies)
    }

    const getLatestMovie = () => {
        return fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(setLatestMovie)
    }

    const getMovieDetails = (movieId) => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(setMovieDetail)
    }

    const getGenres = () => {
        return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then((genresData) => {
                console.log(genresData)
                setGenres(genresData.genres)
            })
    }

    return (
        <MovieContext.Provider value={{
            movies, getUpcomingMovies, upcomingMovies, getMovieDetails, getMovieById, movie, getGenres, genres, getLatestMovie, latestMovie, discoverMovie
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
import { useState, createContext } from "react";

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})
    const [movieList, setMovieList] = useState([])
    const [movieDetail, setMovieDetail] = useState({})
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [latestMovie, setLatestMovie] = useState({})
    const API_KEY = process.env.REACT_APP_WATCHTHIS_API_KEY
    const [genres, setGenres] = useState([])
    const [watchlist, setWatchlist] = useState([])

    
    const getMovieById = (movieId) => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then(res => res.json())
    }

    const discoverMovieList = (genre, watchProvider, runtime) => {
        return fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${API_KEY}&with_genres=${genre}&with_watch_providers=${watchProvider}&with_runtime.lte=${runtime}&with_original_language=en&sort_by=popularity.desc`)
            .then(res => res.json())
            .then(setMovieList)
    }

    const discoverMovie = (genre, watchProvider, runtime) => {
        return fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${API_KEY}&with_genres=${genre}&with_watch_providers=${watchProvider}&with_runtime.lte=${runtime}&with_original_language=en`)
            .then(res => res.json())
            .then((movieArray) => {
                setMovie(movieArray.results[0])
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
                setGenres(genresData.genres)
            })
    }

    const getWatchlist = () => {
        return fetch(`http://localhost:8000/watchlist?userId=${sessionStorage.getItem('app_user_id')}`)
            .then(response => response.json())
            .then(setWatchlist)
    }

    const addMovie = movieObj => {
        return fetch("http://localhost:8000/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObj)
        })
            .then(getWatchlist)
    }

    const deleteMovie = movieId => {
        return fetch(`http://localhost:8000/watchlist/${movieId}`, {
            method: "DELETE"
        })
            .then(getWatchlist)
    }

    return (
        <MovieContext.Provider value={{
            movies, getUpcomingMovies, upcomingMovies, getMovieDetails, getMovieById, movie, getGenres, genres, getLatestMovie, latestMovie, discoverMovie, movieDetail, setMovie, getWatchlist, setWatchlist, watchlist, addMovie, deleteMovie, discoverMovieList, setMovieList, movieList
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
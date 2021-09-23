import { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"
import { useParams } from "react-router"
import "./movie.css"

export const MovieSelection = () => {
    const { addMovie, movieDetail, getMovieDetails } = useContext(MovieContext)
    const { movieId } = useParams()

    useEffect(() => {
        getMovieDetails(movieId)
    }, [])

    const handleAddMovie = () => {
        addMovie(movieDetail)
    }

    return (
        <>
            <div className="background_image">
                <img className="backdrop" src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`} />
            </div>
            <div className="header">
            </div>
                <div className="selection">
                    <div className="titleAndPoster">
                        <img className="poster" src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`} />
                        <h2>{movieDetail.title}</h2>
                    </div>
                <p className="overview" >{movieDetail.overview}</p>
                <button onClick={handleAddMovie} >Add to watchlist</button>
            </div>
            
        </>
    )
}
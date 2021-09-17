import { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"
import { Logout } from "../auth/Logout"
import { useParams } from "react-router"

export const MovieDetail = () =>{
    const { movie, getMovieDetails } = useContext(MovieContext)
    const { movieId } = useParams()

    useEffect(() => {
        getMovieDetails(movieId)
    }, [])

    return (
        <>
        <div>
            <h1>Movie Detail page</h1>
            {Logout()}
        </div>
        <div>
            <h1>{movie.title}</h1>
        </div>
        </>
    )
}
import { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"
import { Logout } from "../auth/Logout"

export const MovieDetail = () =>{
    const { movies, getMovies } = useContext(MovieContext)

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
        <div>
            <h1>Movies</h1>
            {Logout()}
        </div>
        <div>
            {movies.map(movie => {
                return <h1>{movie.title}</h1>
            })}
        </div>
        </>
    )
}
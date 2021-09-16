import { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"

export const MovieDetail = () =>{
    const { movies, getMovies } = useContext(MovieContext)

    // useEffect(() => {
    //     getMovies()
    // }, [])
    return (
        <>
        <div>
            <h1>Movies</h1>
        </div>
        </>
    )
}
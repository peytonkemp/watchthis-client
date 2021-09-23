import { useContext } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"



export const MovieList = () => {
    const { movieList } = useContext(MovieContext)



    return (
        <div className="MovieList">
            {movieList.results?.map(m => {
                return <div>
                    <Link to={`/movie/${m.id}`} key={m.id} >{m.title}</Link>
                </div>
            })}
        </div>
    )
}
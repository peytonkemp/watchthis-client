import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"


export const MovieHome = () => {
    const { upcomingMovies, getUpcomingMovies } = useContext(MovieContext)
    
    useEffect(() => {
        getUpcomingMovies()
    }, [])
    // console.log('upcomingMovies: ', upcomingMovies);



    return (
    <>
        <header>
            <h1>Watch This</h1>
            <p>Spend less time searching and more time watching</p>
        </header>
        <section>
            <div className="watchThisContainer">

                <button className="watchThisButton">Watch This</button>
            </div>


            <div className="upcomingMoviesContainer">
                <div className="upcomingMoviesLabel">
                    <h3>Upcoming Movies</h3>
                </div>
                <div className="upcomingMoviesList">
                    {upcomingMovies.results?.map(u => {
                        return <div>
                            <Link to={`/movie/${u.id}`} key={u.id} >{u.title}</Link>
                        </div>
                    })}
                </div>
            </div>
        </section>
    </>
    )
}
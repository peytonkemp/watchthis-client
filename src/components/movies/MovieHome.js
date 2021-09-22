import { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { MovieContext } from "./MovieProvider"


export const MovieHome = () => {
    const { upcomingMovies, getUpcomingMovies } = useContext(MovieContext)
    const history = useHistory()

    useEffect(() => {
        getUpcomingMovies()
    }, [])
    // console.log('upcomingMovies: ', upcomingMovies);



    return (
    <>
        <header>
            <h1>Watch This</h1>
            <h4>Spend less time searching and more time watching</h4>
        </header>
        <section>
            <div className="watchThisContainer">
                <p></p>
                <button className="watchThisButton" onClick={() => { history.push("/filters") }}>Watch This</button>
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
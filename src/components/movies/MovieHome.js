import { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"


export const MovieHome = () => {
    const { upcomingMovies, getUpcomingMovies } = useContext(MovieContext)

    useEffect(() => {
        getUpcomingMovies()
    }, [])

    return (
    <>
        <header>
            <h1>Watch This</h1>
        </header>
        <section>
            <div className="upcomingMovies">
                    {/* <h1>{upcomingMovies.title}</h1> */}
            </div>
        </section>
    </>
    )
}
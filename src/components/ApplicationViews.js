// import statements
import { Route } from "react-router-dom";
import { MovieProvider } from "./movies/MovieProvider";
// import { MovieList } from "./movies/MovieList";
// import { MovieForm } from "./movies/MovieForm";
// import { CourseProvider } from "./courses/CourseProvider"
import { MovieDetail } from "./movies/MovieDetail";
import { MovieHome } from "./movies/MovieHome";
import { MovieFilters } from "./movies/MovieFilters";
import { MovieSelection } from "./movies/MovieSelection";
import { Watchlist } from "./movies/MovieWatchlist";
import { MovieList } from "./movies/MovieList";


export const ApplicationViews = () => {
    return (
        <>
            <MovieProvider>

                    <Route exact path="/">
                        <MovieHome />
                    </Route>
                    
                    <Route exact path="/movie/:movieId(\d+)">
                        <MovieDetail />
                    </Route>
                    
                    <Route exact path="/filters">
                        <MovieFilters />
                    </Route>
                    
                    <Route exact path="/movieselection/:movieId(\d+)"> 
                        <MovieSelection />
                    </Route>

                    <Route exact path="/watchlist"> 
                        <Watchlist />
                    </Route>

                    <Route exact path="/movieselection/list">
                        <MovieList />
                    </Route>

            </MovieProvider>
        </>
    )
}
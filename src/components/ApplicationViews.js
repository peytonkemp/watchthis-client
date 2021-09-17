// import statements
import { Route } from "react-router-dom";
import { MovieProvider } from "./movies/MovieProvider";
// import { MovieList } from "./movies/MovieList";
// import { MovieForm } from "./movies/MovieForm";
// import { CourseProvider } from "./courses/CourseProvider"
import { MovieDetail } from "./movies/MovieDetail";
import { MovieHome } from "./movies/MovieHome";
import { MovieFilters } from "./movies/MovieFilters";


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

            </MovieProvider>
        </>
    )
}
// import statements
import { Route } from "react-router-dom";
import { MovieProvider } from "./movies/MovieProvider";
// import { MovieList } from "./movies/MovieList";
// import { MovieForm } from "./movies/MovieForm";
// import { CourseProvider } from "./courses/CourseProvider"
import { MovieDetail } from "./movies/MovieDetail";


export const ApplicationViews = () => {
    return (
        <>
            <MovieProvider>

                    <Route exact path="/">
                        <MovieDetail />
                    </Route>


            </MovieProvider>
        </>
    )
}
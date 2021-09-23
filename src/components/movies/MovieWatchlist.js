import { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"



export const Watchlist = () => {
    const { watchlist, getWatchlist } = useContext(MovieContext)

    useEffect(() => {
        getWatchlist()
    })

    return (
        <>
        <h1>watchlist</h1>
            <div className="watchlist">
                {watchlist.title}
            </div>
        </>
    )

}
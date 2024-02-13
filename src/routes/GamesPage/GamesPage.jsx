import React from "react" 
import { FetchGames } from "../../components/FetchData/FetchGames"

export const GamesPage = () => {
    return (
        <div>
            <h2>Games Page</h2>
            <FetchGames></FetchGames>
        </div>
    )
}
import React from "react" 
import { FetchPlayers } from "../../components/FetchData/FetchPlayers"

export const PlayersPage = () => {
    return (
        <div>
            <h2>Players Page</h2>
            <FetchPlayers></FetchPlayers>
        </div>
    )
}
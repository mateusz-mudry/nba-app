import React from "react";
import useFetch from "react-fetch-hook"; 

export const FetchGames = () => {
    const {data: games, isLoading, error} = useFetch('https://www.balldontlie.io/api/v1/games');

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <div>Error: error fetching</div>;
      }

      return (
        <div>
            {games.data.map((d) => (
                <div key={d.id}>
                    <p>{d.home_team_score}</p>
                    <p>{d.visitor_team_score}</p>
                </div>
            ))}
        </div>
      );
};
import React from "react";
import useFetch from "react-fetch-hook"; 

export const FetchPlayers = () => {
    const {data: players, isLoading, error} = useFetch('https://www.balldontlie.io/api/v1/players');

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <div>Error: error fetching</div>;
      }

      return (
        <div>
            {players.data.map((d) => (
                <div key={d.id}>
                    <h2>{d.first_name} {d.last_name}</h2>
                    <p>Height: {d.height_feet}'{d.height_inches}</p>
                    <p>Team: {d.team.full_name}</p>
                </div>
            ))}
        </div>
      );
};
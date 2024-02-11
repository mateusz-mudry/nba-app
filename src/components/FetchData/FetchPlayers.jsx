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
                </div>
            ))}
        </div>
      );
};

{/* <div>
<h1 className='title'>NBA Players</h1>
{players.data.map((player) => (
  <div key={player.id} className="card">
    <h2>{player.first_name} {player.last_name}</h2>
    <p>Position: {player.position}</p>
    <p>Height: {player.height_feet}'{player.height_inches}</p>
    <p>Weight: {player.weight_pounds} lbs</p>
    <p>Team: {player.team.full_name}</p>
  </div>
))}
</div> */}
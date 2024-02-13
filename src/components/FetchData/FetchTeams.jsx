import React from "react";
import useFetch from "react-fetch-hook"; 

export const FetchTeams = () => {
    const {data: teams, isLoading, error} = useFetch('https://www.balldontlie.io/api/v1/teams');

if (isLoading) {
    return <h2>Loading...</h2>;
}

if (error) {
    return <div>Error: error fetching</div>
}

return (
    <div>
        {teams.data.map((d) => (
            <div key={d.id}>
                <h2>Team: {d.full_name}</h2>
                <p>Conference: {d.conference}</p>
                <p>Division: {d.division}</p>
            </div>
        ))}
    </div>
);

};
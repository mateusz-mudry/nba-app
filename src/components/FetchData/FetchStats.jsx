import React from "react";
import useFetch from "react-fetch-hook"; 

export const FetchStats = () => {
    const {data: stats, isLoading, error} = useFetch('https://www.balldontlie.io/api/v1/stats')

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <div>Error: error fetching</div>
    }

    return (
        <div>
            {stats.data.map((d) => (
                <div key={d.id}>
                    <p>{d.pts}</p>
                    <p>{d.reb}</p>
                    <p>{d.ast}</p>
                </div>
            ))}
        </div>
    )
}
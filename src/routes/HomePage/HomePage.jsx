import React from "react" 
import { Navigation } from "../../components/NavigationBar/Navigation"
import { Boxscore } from "../../components/BoxscoreBar/Boxscore";

export const HomePage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Boxscore></Boxscore>
        </div>
    )
}
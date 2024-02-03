import React from "react"
import { NavigationBar } from "./Navigation.styles"
import { NavigationUl } from "./Navigation.styles"
import { NavigationBarDiv } from "./Navigation.styles"
import { NavigationBarLogo } from "./Navigation.styles"
import { NavBarStore } from "./Navigation.styles"
import { LeaguePassButton } from "./Navigation.styles"
import { NavBarStoreUl } from "./Navigation.styles"
import { NavigationMenu } from "./Navigation.styles"

export const Navigation = () => {
    return (
        <NavigationBar>
            <NavigationBarDiv>
                <div>
                <NavigationBarLogo src={require('../../images/nba-logo.png')} />
                </div>
                <NavigationMenu>
                    <NavigationUl>
                        <div>News</div>
                        <div>Games</div>
                        <div>Standings</div>
                        <div>Teams</div>
                        <div>Players</div>
                    </NavigationUl>
                    <NavBarStore>
                        <LeaguePassButton>League Pass</LeaguePassButton>
                            <NavBarStoreUl>
                                <div>Store</div>
                                <div>Tickets</div>
                            </NavBarStoreUl>
                        <div>Sign In</div>
                    </NavBarStore>
                </NavigationMenu>
            </NavigationBarDiv>
        </NavigationBar>
    )

}
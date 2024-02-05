import React from "react"
import { NavigationBar } from "./Navigation.styles"
import { NavigationUl } from "./Navigation.styles"
import { NavigationBarDiv } from "./Navigation.styles"
import { NavigationBarLogo } from "./Navigation.styles"
import { NavBarStore } from "./Navigation.styles"
import { LeaguePassButton } from "./Navigation.styles"
import { NavBarStoreUl } from "./Navigation.styles"
import { NavigationMenu } from "./Navigation.styles"
import { MobileMenu } from "./Navigation.styles"
import { MobileMenuIcon } from "./Navigation.styles"
import { PlayersButton } from "./Navigation.styles"
import { TeamsButton } from "./Navigation.styles"
import { StandingsButton } from "./Navigation.styles"
import { GamesButton } from "./Navigation.styles"
import { NewsButton } from "./Navigation.styles"

export const Navigation = () => {
    return (
        <NavigationBar>
            <NavigationBarDiv>
                <MobileMenu>
                    <MobileMenuIcon src={require('../../images/menu-icon.png')}></MobileMenuIcon>
                </MobileMenu>
                <div>
                <NavigationBarLogo src={require('../../images/nba-logo.png')} />
                </div>
                <NavigationMenu>
                    {/* <NavigationUl>
                        <div>News</div>
                        <div>Games</div>
                        <div>Standings</div>
                        <div>Teams</div>
                        <div>Players</div>
                        <LeaguePassButton>League Pass</LeaguePassButton>
                        <NavBarStore>
                        <div>Store</div>
                        <div>Tickets</div>
                        </NavBarStore>
                    </NavigationUl> */}
                    <NavigationUl>
                        <NewsButton>News</NewsButton>
                        <GamesButton>Games</GamesButton>
                        <StandingsButton>Standings</StandingsButton>
                        <TeamsButton>Teams</TeamsButton>
                        <PlayersButton>Players</PlayersButton>
                    </NavigationUl>
                    <NavBarStore>
                        <LeaguePassButton>League Pass</LeaguePassButton>
                            <NavBarStoreUl>
                                <div>Store</div>
                                <div>Tickets</div>
                            </NavBarStoreUl>
                    </NavBarStore>
                    <div>Sign In</div>
                </NavigationMenu>
            </NavigationBarDiv>
        </NavigationBar>
    )

}
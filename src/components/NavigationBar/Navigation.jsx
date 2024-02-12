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
import { NavLink } from "react-router-dom";

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
                    <NavigationUl>
                        <NavLink to="/news" className="nav-link" activeClassName="active">
                        News
                        </NavLink>
                        <NavLink to="/games" className="nav-link" activeClassName="active">
                        Games
                        </NavLink>
                        <NavLink to="/teams" className="nav-link" activeClassName="active">
                        Teams
                        </NavLink>
                        <NavLink to="/players" className="nav-link" activeClassName="active">
                        Players
                        </NavLink>
                        <NavLink to="/stats" className="nav-link" activeClassName="active">
                        Stats
                        </NavLink>
                        {/* <NewsButton to='/news'>News</NewsButton>
                        <GamesButton to='/games'>Games</GamesButton>
                        <StandingsButton>Standings</StandingsButton>
                        <TeamsButton to='/teams'>Teams</TeamsButton>
                        <PlayersButton to='/players'>Players</PlayersButton> */}
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
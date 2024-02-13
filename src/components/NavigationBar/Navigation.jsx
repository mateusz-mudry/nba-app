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
import { StatsButton } from "./Navigation.styles"
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
                <NavLink to="/">
                <NavigationBarLogo src={require('../../images/nba-logo.png')} />
                </NavLink>
                </div>
                <NavigationMenu>
                    <NavigationUl>
                        <NewsButton to='/news'>
                        <NavLink to="/news" className="nav-link" activeClassName="active">
                        News
                        </NavLink>
                        </NewsButton>
                        <GamesButton to='/games'>
                            <NavLink to="/games" className="nav-link" activeClassName="active">
                            Games
                            </NavLink>
                        </GamesButton>
                        <StatsButton>
                        <NavLink to="/stats" className="nav-link" activeClassName="active">
                        Stats
                        </NavLink>
                        </StatsButton>
                        <TeamsButton to='/teams'>
                            <NavLink to="/teams" className="nav-link" activeClassName="active">
                            Teams
                            </NavLink>
                        </TeamsButton>
                        <PlayersButton to='/players'>
                        <NavLink to="/players" className="nav-link" activeClassName="active">
                        Players
                        </NavLink>
                        </PlayersButton>
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
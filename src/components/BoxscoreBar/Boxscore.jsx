import React from "react"
import { BoxscoreComponent } from "./Boxscore.styles"
import { GameScoreDiv } from "./Boxscore.styles"
import { BoxscoreTop } from "./Boxscore.styles"
import { BoxscoreBox } from "./Boxscore.styles"
import { BoxscoreText } from "./Boxscore.styles"
import { ResultContainer } from "./Boxscore.styles"
import { ResultBox } from "./Boxscore.styles"
import { ResultLogo } from "./Boxscore.styles"
import { ResultTeamName } from "./Boxscore.styles"
import { ResultScore } from "./Boxscore.styles"
import { ResultTeam } from "./Boxscore.styles"

export const Boxscore = () => {
    return (
        <BoxscoreComponent>
            <GameScoreDiv>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/blazers.png')}></ResultLogo>
                                <ResultTeamName>TMN</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>129</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/rockets.png')}></ResultLogo>
                                <ResultTeamName>TMN</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>103</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
            </GameScoreDiv>
        </BoxscoreComponent>
    )
}
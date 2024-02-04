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
                                <ResultTeamName>por</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>129</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/rockets.png')}></ResultLogo>
                                <ResultTeamName>hou</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>103</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/celtics.png')}></ResultLogo>
                                <ResultTeamName>bos</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>99</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/hawks.png')}></ResultLogo>
                                <ResultTeamName>atl</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>104</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/pistons.png')}></ResultLogo>
                                <ResultTeamName>det</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>88</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/hornets.png')}></ResultLogo>
                                <ResultTeamName>cha</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>98</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/bucks.png')}></ResultLogo>
                                <ResultTeamName>mil</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>108</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/cavaliers.png')}></ResultLogo>
                                <ResultTeamName>cle</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>107</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/lakers.png')}></ResultLogo>
                                <ResultTeamName>lal</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>99</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/clippers.png')}></ResultLogo>
                                <ResultTeamName>lac</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>95</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/jazz.png')}></ResultLogo>
                                <ResultTeamName>uta</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>80</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/kings.png')}></ResultLogo>
                                <ResultTeamName>sac</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>92</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/knicks.png')}></ResultLogo>
                                <ResultTeamName>nyk</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>110</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/mavericks.png')}></ResultLogo>
                                <ResultTeamName>dal</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>111</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/timberwolves.png')}></ResultLogo>
                                <ResultTeamName>min</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>100</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/pelicans.png')}></ResultLogo>
                                <ResultTeamName>nop</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>82</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/magic.png')}></ResultLogo>
                                <ResultTeamName>orl</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>94</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/pacers.png')}></ResultLogo>
                                <ResultTeamName>ind</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>98</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/wizards.png')}></ResultLogo>
                                <ResultTeamName>was</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>93</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/raptors.png')}></ResultLogo>
                                <ResultTeamName>tor</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>112</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
                <BoxscoreBox>
                    <BoxscoreTop>
                        <BoxscoreText>final</BoxscoreText>
                        <BoxscoreText>lp</BoxscoreText>
                    </BoxscoreTop>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/thunder.png')}></ResultLogo>
                                <ResultTeamName>okc</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>132</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                    <ResultContainer>
                        <ResultBox>
                            <ResultTeam>
                                <ResultLogo src={require('../../images/team-logos/spurs.png')}></ResultLogo>
                                <ResultTeamName>sas</ResultTeamName>
                            </ResultTeam>
                            <ResultScore>121</ResultScore>
                        </ResultBox>
                    </ResultContainer>
                </BoxscoreBox>
            </GameScoreDiv>
        </BoxscoreComponent>
    )
}
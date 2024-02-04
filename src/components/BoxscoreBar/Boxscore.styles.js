import styled from "styled-components";

export const BoxscoreComponent = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #ffff;
  box-shadow: -0px 2px 5px -2px rgba(191, 191, 194, 1);
  display: flex;
`;

export const GameScoreDiv = styled.div`
  padding-left: 40px;
  height: 90px;
  width: 125px;
  display: flex;
`;

export const BoxscoreBox = styled.div`
  padding: 10px;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

export const BoxscoreTop = styled.div`
  height: 20px;
  width: 105px;
  display: flex;
  justify-content: space-between;
`;

export const BoxscoreText = styled.p`
  margin: 0;
  font-size: 13px;
  &:nth-child(2) {
    color: #999999;
  }
`;

export const ResultContainer = styled.div`
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const ResultBox = styled.div`
  height: 20px;
  width: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
`;

export const ResultTeam = styled.div`
  display: flex;
  align-items: center;
`;

export const ResultLogo = styled.img`
  height: 20px;
  width: 20px;
`;

export const ResultTeamName = styled.p`
  margin: 0;
`;

export const ResultScore = styled.p`
  margin: 0;
`;

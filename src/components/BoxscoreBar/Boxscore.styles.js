import styled from "styled-components";

export const BoxscoreComponent = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #ffff;
  box-shadow: -0px 2px 5px -2px rgba(191, 191, 194, 1);
  padding: 0 40px;
  display: flex;
`;

export const GameScoreDiv = styled.div`
  height: 90px;
  width: 125px;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

export const BoxscoreBox = styled.div`
  padding: 5px;
`;

export const BoxscoreTop = styled.div`
  height: 20px;
  width: 115px;
  display: flex;
  justify-content: space-between;
`;

export const BoxscoreText = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 13px;
`;

export const ResultContainer = styled.div``;

export const ResultBox = styled.div`
  height: 20px;
  width: 115px;
  display: flex;
  justify-content: space-between;
`;

export const ResultTeam = styled.div`
  display: flex;
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

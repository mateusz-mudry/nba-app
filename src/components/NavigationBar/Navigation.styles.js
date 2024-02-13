import styled from "styled-components";

export const NavigationBar = styled.header`
  width: 100vw;
  background-color: #000000;
  color: #fff;
  font-family: Arial, sans-serif;
`;

export const MobileMenu = styled.div`
  height: 55px;
  width: 21px;
  display: flex;
  align-items: center;
  padding: 0 15px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.img`
  height: 22px;
  width: 21px;
`;

export const NavigationBarDiv = styled.header`
  height: 55px;
  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    margin: 0 10px;
  }

  @media (min-width: 1280px) {
    margin: 0 40px;
    padding: 0 32px;
  }
`;

export const NavigationUl = styled.div`
  /* width: 700px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

// export const NavigationUl = styled.div`
//   display: flex;
//   justify-content: space-around;
//
//   font-size: 14px;
//   font-weight: 600;
//   cursor: pointer;
// `;

export const NavigationBarLogo = styled.img`
  height: 31px;
  width: 50px;
`;

export const NavBarStore = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const NavBarStoreUl = styled.div`
  width: 134px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 600;
  padding: 0 8px;
  cursor: pointer;
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const LeaguePassButton = styled.button`
  height: 32px;
  width: 110px;
  padding: 0 8px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: #fbcd44;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 1025px) {
    display: none;
  }
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  font-size: 14px;
  @media (max-width: 100vw) {
    width: 95vw;
  }

  /* @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 1200px) {
    width: 40%;
  } */
`;

export const PlayersButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  font-weight: 600;
  @media (max-width: 915px) {
    display: none;
  }
`;

export const TeamsButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  font-weight: 600;
  @media (max-width: 770px) {
    display: none;
  }
`;

export const StatsButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  font-weight: 600;
  @media (max-width: 630px) {
    display: none;
  }
`;

export const GamesButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  font-weight: 600;
  @media (max-width: 470px) {
    display: none;
  }
`;

export const NewsButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  font-weight: 600;
  @media (max-width: 370px) {
    display: none;
  }
`;

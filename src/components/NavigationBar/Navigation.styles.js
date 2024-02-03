import styled from "styled-components";

export const NavigationBar = styled.header`
  width: 100vw;
  background-color: #000000;
  color: #fff;
  font-family: Arial, sans-serif;
`;

export const NavigationBarDiv = styled.header`
  height: 55px;
  display: flex;
  align-items: center;
  margin: 0 40px;
  padding: 0 32px;
`;

export const NavigationUl = styled.div`
  display: flex;
  justify-content: space-around;
  width: 736px;
  font-size: 14px;
  font-weight: 600;
`;

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
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 300px;
`;

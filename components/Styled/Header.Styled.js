import styled from "styled-components";
import Link from "next/link";

export const HeaderStyled = styled.header`
  min-height: 72px;
  height: 72px;
  margin-bottom: 10px;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  height: inherit;

  @media screen and (min-width: 480px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

export const MenuToggle = styled.div`
  // display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 20px;
  background-color: purple;

  @media screen and (min-width: 480px) {
    display: none;
  }
`;
export const Menu = styled.div`
  top: 72px;
  height: calc(100% - 72px);
  width: 100%;
  // right: 100%;
  position: absolute;
  background-color: black;
`;
export const MenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;
export const MenuLink = styled.a`
  padding: 1rem 4rem;
  z-index: 9999;
  color: white;
  border-bottom: 0.001rem solid white;

  :not(:last-of-type) {
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
`;

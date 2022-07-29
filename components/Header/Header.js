import Link from "next/link";

import {
  HeaderStyled,
  Navbar,
  Logo,
  MenuToggle,
  Menu,
  MenuLinks,
  MenuLink,
} from "../Styled/Header.Styled";

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar>
        <Logo href="/">Tsotetsi Mosala</Logo>
        <MenuToggle>
          <span />
          <span />
          <span />
        </MenuToggle>
        <Menu>
          <MenuLinks>
            <Link href="/">
              <MenuLink>Home</MenuLink>
            </Link>
            <Link href="/about">
              <MenuLink>About</MenuLink>
            </Link>
            <Link href="/">
              <MenuLink>Services</MenuLink>
            </Link>
            <Link href="/contact">
              <MenuLink>Contact</MenuLink>
            </Link>
          </MenuLinks>
        </Menu>
      </Navbar>
    </HeaderStyled>
  );
};

export default Header;

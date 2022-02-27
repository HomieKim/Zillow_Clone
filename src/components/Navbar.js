import React from 'react';
import styled from '@emotion/styled';

const NavbarConatiner = styled.nav`
  width : 100%;
  margin : auto;
  background-color : white;
`;

const SytleInnerContainer = styled.div`
  display : flex;
  justify-content : space-between;
  height :  80px;
  align-items : center;
  margin : auto;
  overflow : visible;
  width : 100%;
  max-width : 1280px;
  img {
    cursor: pointer;
  }
`

const StyleList = styled.ul`
  list-style: none;
  display : flex;
  margin : 0;
  li {
    font-size : 1.1em;
    padding : 1.3rem;
    color : #393e46;
    cursor: pointer;
    :hover {
      color : blue;
    }
  }

`

const Navbar = () => {
  return (
    <NavbarConatiner>
      <SytleInnerContainer>
      <div>
        <StyleList >
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Home Loans</li>
          <li>Agent finder</li>
        </StyleList>
      </div>
      <div >
        <img 
          src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg' 
          alt='logo'
          style={{width : '160px', height:'35px'}}
          />
      </div>
      <div>
      <StyleList>
          <li>Manage Rentals</li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Sign in</li>
        </StyleList>
      </div>
      </SytleInnerContainer>
    </NavbarConatiner>
  );
}

export default Navbar;
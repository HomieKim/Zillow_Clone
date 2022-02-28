import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavData from './NavData';

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
  const [isHover, setIsHover] = useState(false);
  const [listValue, setListValue] = useState('');
  const hoverHandler = (e) => {
    setIsHover(true);
    setListValue(e.target.innerText);
  };
  return (
    <NavbarConatiner>
      <SytleInnerContainer>
      <div>
        <StyleList >
          <li
          onMouseEnter={hoverHandler}
          onMouseLeave={()=> setIsHover(false)}
          >
            Buy
          </li>
          <li
          onMouseEnter={hoverHandler}
          onMouseLeave={()=> setIsHover(false)}
          >
            Rent
          </li>
          <li
          onMouseEnter={hoverHandler}
          onMouseLeave={()=> setIsHover(false)}
          >
            Sell
          </li>
          <li
          onMouseEnter={hoverHandler}
          onMouseLeave={()=> setIsHover(false)}
          >
            Home Loans
          </li>
          <li
          onMouseEnter={hoverHandler}
          onMouseLeave={()=> setIsHover(false)}
          >
            Agent finder
          </li>
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
      {
        isHover && <NavData listValue={listValue}/>
      }
    </NavbarConatiner>
  );
}

export default Navbar;
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const StyleContainer = styled.div`
  width : 100%;
  height: auto;
  padding : 12px 16px;
  display : flex;
  justify-content : space-between;
  align-items : center;
  div {
    cursor: pointer;
  }
`;
const ResponsiveNavBar = ({handleChangeView})=> {
  return (
    <StyleContainer>
      <div onClick={handleChangeView}>
        <FontAwesomeIcon icon={faBars} color='white' size='lg'/>
      </div>
      <div>
        <img src='https://s.zillowstatic.com/pfs/static/z-logo-white.svg' alt='reponsive logo'/>
      </div>
      <div style={{color : 'white', fontSize : '15px'}}>
        Sign in
      </div>
    </StyleContainer>
    
  )
}

export default ResponsiveNavBar;
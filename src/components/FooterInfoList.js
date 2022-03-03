import React from 'react';
import styled from '@emotion/styled';
import { ArrowRightOutlined } from '@ant-design/icons/lib/icons';


const StyleFooterInfo = styled.div`
    border-bottom: 1px solid #d8d8d8;
    text-align : center;
    max-width : 1280px;
    margin : auto;
    padding : 24px 0;
`;

const StyleFooterList = styled.ul`
  display : flex;
  list-style : none;
  flex-wrap : wrap;
  justify-content : space-evenly;
  li {
    font-size : 14px;
    font-weight : 400;
    color: #2a2a37;
    cursor: pointer;
    :hover {
      text-decoration : underline;
    }
  }
  
`;
const StyleUnderList = styled.ul`
  list-style : none;
  display : flex;
  justify-content : center;
  li {
    cursor: pointer;
    margin-right : 24px;
    font-size : 14px;
    font-weight : 400;
    :hover {
      text-decoration : underline;
    }
  }

`
const StyleDiv = styled.div`
  margin-top : 34px;
  a {
    :hover {
      text-decoration : underline;
    }
  }
`
const FooterInfoList = ()=> {
  return (
    <StyleFooterInfo>
        <StyleFooterList>
          <li>About</li>
          <li>Zestimates</li>
          <li>Research</li>
          <li>Careers</li>
          <li>Help</li>
          <li>Advertise</li>
          <li>Fair Housing Guide</li>
          <li>Terms of use</li>
          <li>Privacy Portal</li>
          <li>Cookie Preference</li>
          <li>Blog</li>
          <li>AI</li>
          <li>Mobile Apps</li>
        </StyleFooterList>
        <StyleUnderList>
          <li>Trulia</li>
          <li>StreetEasy</li>
          <li>HotPads</li>
          <li>Out East</li>
          <li>Showing time</li>
        </StyleUnderList>
        <StyleDiv>
          <a href='https://privacy.zillowgroup.com/cookie'>
            Do Not Sell My Personal Information➝
          </a>
        </StyleDiv>
      </StyleFooterInfo>
  )
}

export default FooterInfoList;
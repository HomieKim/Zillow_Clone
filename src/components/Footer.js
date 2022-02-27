import React from 'react';
import styled from '@emotion/styled';
import { DownOutlined } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';
import FooterInfoList from './FooterInfoList';
import Contact from './Contact';

const StyleListContainer = styled.div`
    margin: auto;
    padding: 31px 24px;
    width : 100%;
    height: auto;
    overflow: visible;
    border-bottom: 1px solid #d8d8d8;
    text-align : center;
    max-width : 1280px;
    text-align : center;
`
const StyleUnorderList = styled.ul`
  list-style : none;
  margin-bottom : 0;
  display : flex;
  
  Button {
    border : none; 
  }

  li {
    cursor: pointer;
    color : #2a2a33;
    font-weight : bold;
    font-size : 1.2em;
    span {
      margin-right : 10px;
    }
  }
  justify-content : space-evenly;
  div{
    width : 1px;
    height : 28px;
    content: "";
    background-color : rgba(0, 0, 0, 0.4);
  }
`;

const Footer =() =>{
  return (
    <>
      <StyleListContainer>
        <StyleUnorderList>
          <li>
            <span>Real Estate</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
          </li>
          <div></div>
          <li>
            <span>Rentals</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
          </li>
          <div></div>
          <li> 
            <span>Mortgage Rates</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
          </li>
          <div></div>
          <li>
            <span>Browse Homes</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
          </li>
        </StyleUnorderList>
      </StyleListContainer>
      <FooterInfoList />
      <Contact />
    </>
  );
}
export default Footer;
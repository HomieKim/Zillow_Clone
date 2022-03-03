import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DownOutlined } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';
import FooterInfoList from './FooterInfoList';
import Contact from './Contact';
import { FooterData } from '../dummy/FooterData';
import { useMediaQuery } from 'react-responsive';

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
      cursor: pointer;
      margin-right : 10px;
    }
   
  }
  justify-content : space-evenly;
  @media screen and (max-width : 1024px) {
    display : grid;
    grid-template-columns : 1fr 1fr;
    text-align : left;
    
  }
`;
const StyleSection = styled.div`
    width : 1px;
    height : 28px;
    content: "";
    background-color : rgba(0, 0, 0, 0.4);
`
const ButtonWrapper = styled.section`
    margin: auto;
    padding-left:24px;
    text-align: center;
    width : auto;
    
    :hover {
      span {
        text-decoration : underline;
      }
    }
    @media screen and (max-width : 1024px) {
        text-align : left;
    }
` 
const InnerUnorderList = styled.ul`
  list-style : none;
  margin : 0;
  padding : 0;
  text-align : center;
  li {
    font-size : 0.9em;
    font-weight : lighter;
    color : #1890ff;
    margin-bottom : 8px;
  }
  @media screen and (max-width : 1024px) {
      text-align : left;
      padding-left : 24px;
  }
`
const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  
`
const Footer =() =>{

  const [clickReal, setClickReal] = useState(false);
  const [clickRentals,setClickRentals] = useState(false);
  const [clickMortgage, setClickMortgage] = useState(false);
  const [clickBrowse, setClickBrowse] = useState(false);

  const clickHandler = (name)=> {
    if(name === 'Real Estate'){
      setClickReal(!clickReal);
    }else if(name === 'Rentals'){
      setClickRentals(!clickRentals);
    }else if(name === 'Mortgage Rates'){
      setClickMortgage(!clickMortgage);
    }else{
      setClickBrowse(!clickBrowse);
    }
  }
  const Data = FooterData;
  const isPc = useMediaQuery({
    query : '(min-width: 1025px)'
  })
  return (
    <>
      <StyleListContainer>
        <StyleUnorderList>
          <ListWrapper>
          <li>
            <ButtonWrapper  onClick={()=>clickHandler('Real Estate')}>
            <span>Real Estate</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
            </ButtonWrapper>
            {clickReal && 
              <InnerUnorderList>
                {Data['Real Estate'].map((item, idx)=>(
                  <li key={idx}>{item}</li>
                ))}
              </InnerUnorderList>}
          </li>
          </ListWrapper>
          {
            isPc && <StyleSection></StyleSection>
          }
          <ListWrapper>
          <li>
          <ButtonWrapper onClick={()=>clickHandler('Rentals')}>
            <span>Rentals</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
            </ButtonWrapper>
            {clickRentals && 
              <InnerUnorderList>
                {Data['Rentals'].map((item, idx)=>(
                  <li key={idx}>{item}</li>
                ))}
              </InnerUnorderList>}
          </li>
          </ListWrapper>
          {
            isPc && <StyleSection></StyleSection>
          }
          <ListWrapper>
          <li> 
          <ButtonWrapper onClick={()=>clickHandler('Mortgage Rates')}>
            <span>Mortgage Rates</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
            </ButtonWrapper>
            {clickMortgage && 
              <InnerUnorderList>
                {Data['Mortgage Rates'].map((item, idx)=>(
                  <li key={idx}>{item}</li>
                ))}
              </InnerUnorderList>}
          </li>
          </ListWrapper>
          {
            isPc && <StyleSection></StyleSection>
          }
          <ListWrapper>
          <li>
          <ButtonWrapper onClick={()=>clickHandler('Browse Homes')}>
            <span>Browse Homes</span>
            <Button size='large' type='link' icon={<DownOutlined/>}></Button>
            </ButtonWrapper>
            {clickBrowse && 
              <InnerUnorderList>
                {Data['Browse Homes'].map((item, idx)=>(
                  <li key={idx}>{item}</li>
                ))}
              </InnerUnorderList>}
          </li>
          </ListWrapper>
        </StyleUnorderList>
      </StyleListContainer>
      <FooterInfoList />
      <Contact />
    </>
  );
}
export default Footer;
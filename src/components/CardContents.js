import React, { useState } from "react";
import { Button, Card } from "antd";
import styled from "@emotion/styled";

const StyleCard = styled(Card)`
  width: 388px;
  height: 466px;  
  padding : 24px;
  box-shadow: rgb(209 209 213) 0px 5px 15px;
  transition : all 200ms ease-in;
  :hover {
    transform : translateY(-10px)  scaleX(1.02);
  }
  border-radius : 6px;
  img {
    margin-top : 16px;
  }
  @media screen and (max-width : 1024px){
    display : flex;
    width : 647px;
    height : 252px;
    justify-content : space-between;
    padding : 0 24px;
    margin-bottom : 24px;
    img {
      margin-top : 36px;
      width : 310px;
    }
    @media screen and (max-width : 768px){
      display : block;
      width : 457px;
      height : 480px;
      img {
        width : 100%;
        height : 100%;
      }
    }
  }
  
`
const StyleDiv = styled.div`
  width : 100%;
  height : 100;
  text-align : center;
  margin-top : 16px;
  .ant-card-meta-title {
    font-size: 24px;
    font-family: "Playfair Display", serif;
    font-weight : 700;
  }
  .ant-card-meta-description {
    font-size : 15px;
    font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 24px;
    text-transform: none;
    color: rgb(42, 42, 51);
  }
  @media screen and (max-width : 1024px){
    margin : 0;
    text-align : left;
  }
 
`;

const StyleButton = styled(Button)`
  font-weight: 700;
  font-size: 16px;
  padding: 9px 16px;
  margin: 24px 0px 16px;
  line-height: 24px;
  height: auto;
  font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const CardContents = ({imgSource, title, buttonName, description}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <StyleCard
        
        hoverable
        cover={
          <img
            alt="buyImage"
            src={imgSource}
          />
        }
        onMouseEnter={() => setIsHover(true) }
        onMouseLeave={() => setIsHover(false) }
      >
        <StyleDiv>
          <Card.Meta title={title} description={description} />
          <StyleButton type='primary' ghost={!isHover} >{buttonName}</StyleButton>
        </StyleDiv>
      </StyleCard>
    </>
  );
};

export default CardContents;

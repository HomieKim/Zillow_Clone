import React from "react";
import styled from "@emotion/styled";
import CardContents from './CardContents';
import { CardData } from '../dummy/CardData';

const ContentsLayout = styled.div`
  background-color: #f9f9fb;
  padding: 72px 0;
  min-height: 695px;
`;

const StyleDiv = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 425px;
  margin: 10px auto 40px;
`;
const StyleContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;
const StyleCardContainer = styled.div`
  display :flex;
  margin : auto;
  max-width : 1200px;
  width: 100%;
  justify-content :space-between;

`;
const Contents = () => {
  return (
    <ContentsLayout>
      <StyleContainer>
        <StyleDiv>
          Whether you're buying, selling or renting, we can help you move
          forward
        </StyleDiv>
        <StyleCardContainer>
          {
            CardData.map((item) => (
              <CardContents 
                key={item.id}
                imgSource={item.imgSource}
                title={item.title}
                buttonName={item.buttonName}
                description={item.description}
              />
            ))
          }
          
        </StyleCardContainer>
      </StyleContainer>
    </ContentsLayout>
  );
};

export default Contents;

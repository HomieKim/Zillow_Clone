import React from "react";
import styled from "@emotion/styled";
import Card_Contents from './Card_Contents';

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

const Contents = () => {
  return (
    <ContentsLayout>
      <StyleContainer>
        <StyleDiv>
          Whether you're buying, selling or renting, we can help you move
          forward
        </StyleDiv>
        <Card_Contents></Card_Contents>
      </StyleContainer>
    </ContentsLayout>
  );
};

export default Contents;

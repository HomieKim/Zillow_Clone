import React from "react";
import styled from "@emotion/styled";
import { NavbarData } from "../dummy/NavbarData";

const StyleCotanier = styled.div`
  border-top: 1px solid rgb(216,216,216);
`

const StyleDiv = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 24px;
  z-index :3;
  ul{
    list-style : none;
  }
`;

const SytleOuterList = styled.li`
  width :  ${(props) => (props.title ==='Home Loans' ? '20%' : props.title ==='Rent' ? '20%' : '25%')};
  :first-child{
    padding-right : 24px;
  }
  & + &{
    border-left : 1px solid rgb(216,216,216);
    padding : 0 24px;
  }
`
const StyleOuterUnorderList =  styled.ul`
  display : flex;
`
const StyleInnerUndorderList = styled.ul`
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;
  max-height : ${(props) => (props.title ==='Home Loans' ? '250px' : props.title ==='Rent' ? '250px' : '225px')};
`
const StyleInnerList = styled.li`
  display : flex;
  padding : 12px 12px 12px 0px;
  cursor: pointer;
  color : rgb(0, 106, 255);

`
const NavData = ({ listValue }) => {
  const data = NavbarData[listValue];
  //console.log(data);
  return (
    <StyleCotanier>
      <StyleDiv>
        <StyleOuterUnorderList>
          {
            data.map((item) => (
              <SytleOuterList title={listValue}>
                <h3>{item.title}</h3>
                <StyleInnerUndorderList title={listValue}>
                  {
                    item.data.map((item) => (
                      <StyleInnerList>{item}</StyleInnerList>
                    ))
                  }
                </StyleInnerUndorderList>
              </SytleOuterList>
            ))
          }
        </StyleOuterUnorderList>
      </StyleDiv>
    </StyleCotanier>
  );
};

export default NavData;

import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";
import {Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons/lib/icons';


const ImageBackgound = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: 584px;
  background-size: cover;
  background-image: url(https://www.zillowstatic.com/s3/homepage/static/_Desktop_Overlay_ChangeStartsHere_HC.webp);
  background-position: center;
`;
const ImgContainer = styled.div``;

const SearchContainer = styled.form`
  position: relative;
  text-align : center;
  top : 20%;
`;

const Styletitle = styled.div`
  color : white;
  font-weight : bold;
  font-size : 2em;
  margin-bottom : 20px;
`;

const suffix = (
  <SearchOutlined 
    style={
      {
        fontSize : 26,
        fontWeight : 'bold',
        cursor:'pointer'
      }
    }
  />
);




const Header = () => {
  return (
    <ImgContainer>
      <ImageBackgound>
        <Navbar />
        <SearchContainer>
          <Styletitle>Change starts here</Styletitle>
          <Input
          style={{
            width : 600,
            height: 'auto',
            paddingTop : 22,
            paddingBottom : 22,
            paddingLeft : 24,
            borderRadius : 8,
          }}
          size='large'
          placeholder="Enter an adress, neighborhood, city, or ZIP code"
          suffix={suffix}
          />
        </SearchContainer>
      </ImageBackgound> 
    </ImgContainer>
  );
};

export default Header;

import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";
import {Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { useMediaQuery } from 'react-responsive';
import ResponsiveNavBar from './ResponsiveNavBar';


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
  position: absolute;
  width : 100%;
  z-index : 0;
  text-align : center;
  margin : auto;
  top : 200px;

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

const Header = ({handleChangeView}) => {
  const isPc = useMediaQuery({
    query : '(min-width: 1025px)'
  });
  const isTablet = useMediaQuery({
    query : '(max-width: 1024px)'
  });
  const isMobile = useMediaQuery({
    query : '(max-width : 768px)'
  })
  return (
    <ImgContainer>
      <ImageBackgound>
        {isPc && <Navbar />}
        {isTablet && <ResponsiveNavBar handleChangeView={handleChangeView} />}
        <SearchContainer>
          <Styletitle>Change starts here</Styletitle>
          <Input
          style={{
            width : isMobile ? 400 : 600,
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

import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

const ImageBackgound = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: 584px;
  background-size: cover;
  background-image: url(https://www.zillowstatic.com/s3/homepage/static/_Desktop_Overlay_ChangeStartsHere_HC.webp);
  background-position: center;
`;
const ImgContainer = styled.div``;

const SearchContainer = styled.div`
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

const StyledInput = styled.input`
 

`;

const Header = () => {
  return (
    <ImgContainer>
      <ImageBackgound>
        <Navbar />
        <SearchContainer>
          <Styletitle>Change starts here</Styletitle>
          <div style={{display : 'flex'}}>
            <StyledInput type='text'/>
            <div>버트dsfsadfsaf</div>
          </div> 
        </SearchContainer>
      </ImageBackgound> 
    </ImgContainer>
  );
};

export default Header;

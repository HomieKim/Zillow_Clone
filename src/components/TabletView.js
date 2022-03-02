import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
const StyleContainer = styled.div`
  border-bottom : 1px solid rgb(216,216,216);
  padding : 16px 8px;
  text-align : center;
`
const StyleButton = styled.div`
  position : absolute;
`;
const Close = styled(CloseOutlined)`
  color : #1890ff;
  font-weight : bold;
  font-size : 17px;
  cursor: pointer;
`
const StyleSection = styled.section`
  width : 100%;
  height : 100%;
  border-bottom : 1px solid rgb(216,216,216);
  padding : 12px 0px 13px 15px;
  display : flex;
  justify-content : space-between;
  align-items : center;
`
const Section = styled.div`
  width : 1px;
  height : auto;
  content : "";
  background-color : rgba(0, 0, 0, 0.4);
`
const DownIcon = styled(DownOutlined)`
  font-size : 17px;
  color : rgb(0, 106, 255);
  padding: 0px 25px;
  cursor: pointer;
`
const UpIcon = styled(UpOutlined)`
  font-size : 17px;
  color : rgb(0, 106, 255);
  padding: 0px 25px;
  cursor: pointer;
`
const StyleTitle = styled.div`
  font-size : 16px;
  :hover{
    color : rgb(0, 106, 255);
  }
  cursor: pointer;
`
const TabletView =({handleChangeView})=> {
  const [buyToggle, setBuyToggle] = useState(false);
  const isPc = useMediaQuery({
    query : '(min-width : 1025px)'
  })
  if(isPc){
    handleChangeView();
  }
  return (
    <>
      <StyleContainer>
        <StyleButton onClick={handleChangeView}><Close/></StyleButton>
        <img src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg' alt='logo' />
      </StyleContainer>
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Buy</StyleTitle>
        <div style={{display: 'flex'}}>
          <Section/>
          <div>{buyToggle ? <UpIcon/> : <DownIcon />}</div>
        </div>
      </StyleSection>

    </>
    
  )
}

export default TabletView;
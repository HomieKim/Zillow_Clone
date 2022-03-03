import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { NavbarData } from '../dummy/NavbarData';

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
  background-color : rgba(0, 0, 0, 0.1);
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
const StyleUnorderList = styled.ul`
  background-color :rgb(250,250,250);
  padding : 12px 0px 0px 13px;
  margin : 0;
  list-style : none;
  border-bottom : 1px solid rgb(216,216,216);
  li {
    padding : 8px 0px;
    cursor: pointer;
    
  }
  span{
    color : #1890ff;
    :hover{
      text-decoration: underline;
      color : grey;
    }
  }
  h4{
    
     :nth-of-type(n+2){
       margin-top : 25px
     }
    
  }
`

let now = '';

const TabletView =({handleChangeView})=> {

  const [buyToggle, setBuyToggle] = useState(false);
  const [rentToggle, setRentToggle] = useState(false);
  const [sellToggle, setSellToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [agentToggle, setAgentToggle] = useState(false);
  const [manageToggle, setManageToggle] = useState(false);

  const nowToggle = (now) => {
    switch(now){
      case 'Buy':
        buyToggle && setBuyToggle(!buyToggle);
        break;
      case 'Rent':
        rentToggle && setRentToggle(!rentToggle);
        break;
      case 'Sell':
        sellToggle && setSellToggle(!sellToggle);
        break;
      case 'Home Loans':
        homeToggle && setHomeToggle(!homeToggle);
        break;
      case 'Agent finder':
        agentToggle && setAgentToggle(!agentToggle);
        break;
      case 'Manage Rentals':
        manageToggle && setManageToggle(!manageToggle);
        break;
      default : break;
    }
  }

  const toggleHandler = (name)=> {
    console.log(name);
    if(now === ''){
      now = name;
      console.log(now);
    }
    switch(name){
      case 'Buy':
        if(now === name) {
          setBuyToggle(!buyToggle);
          return;
        }
        nowToggle(now);
        now =name;
        setBuyToggle(!buyToggle);
        //console.log(buyToggle);
        break;
      case 'Rent':
        if(now === name) {
          setRentToggle(!rentToggle);
          return;
        }
        nowToggle(now);
        now =name;
        setRentToggle(!rentToggle);
        break;
      case 'Sell':
        if(now === name) {
          setSellToggle(!sellToggle);
          return;
        }
        nowToggle(now);
        now =name;
        setSellToggle(!sellToggle);
        break;
      case 'Home Loans':
        if(now === name) {
          setHomeToggle(!homeToggle);
          return;
        }
        nowToggle(now);
        now =name;
        setHomeToggle(!homeToggle);
        break;
      case 'Agent finder':
        if(now === name) {
          setAgentToggle(!agentToggle);
          return;
        }
        nowToggle(now);
        now =name;
        setAgentToggle(!agentToggle);
        break;
      case 'Manage Rentals':
        if(now === name) {
          setManageToggle(!manageToggle);
          return;
        }
        nowToggle(now);
        now =name;
        setManageToggle(!manageToggle);
        break;
      default : break;
    }

  }

  const stateReturn = (name)=> {
    if(name === 'Buy') {
      return buyToggle;
    }else if(name === 'Rent'){
      return rentToggle;
    }else if(name === 'Sell'){
      return sellToggle;
    }else if(name === 'Home Loans'){
      return homeToggle;
    }else if(name === 'Agent finder'){
      return agentToggle;
    }else if(name === 'Manage Rentals'){
      return manageToggle;
    }
  }

  const isPc = useMediaQuery({
    query : '(min-width : 1025px)'
  })
  if(isPc){
    handleChangeView();
  }

  const dataKeys = Object.keys(NavbarData);
  console.log(dataKeys);
  return (
    <>
      <StyleContainer>
        <StyleButton onClick={handleChangeView}><Close/></StyleButton>
        <img src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg' alt='logo' />
      </StyleContainer>
      {
        dataKeys.map((item) => (
         <> 
        <StyleSection>
          <StyleTitle style={{fontSize: 17}}>{item}</StyleTitle>
          <div style={{display: 'flex'}}>
            <Section/>
            <div onClick={()=> toggleHandler(item)}>{stateReturn(item) ? <UpIcon/> : <DownIcon />}</div>
          </div>
        </StyleSection>
        {
          stateReturn(item) &&
          <StyleUnorderList>
            {
              NavbarData[item].map((ListItem) =>(
                <>
                  <h4>{ListItem.title}</h4>
                  {
                    ListItem.data.map((dataItem)=> (
                      <li><span>{dataItem}</span></li>
                    ))
                  }
                </>
              ))
            }
          </StyleUnorderList>
        }
        </>
        ))
      }
      {/* <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Buy</StyleTitle>
        <div style={{display: 'flex'}}>
          <Section/>
          <div onClick={()=> toggleHandler('Buy')}>{buyToggle ? <UpIcon/> : <DownIcon />}</div>
        </div>
      </StyleSection>
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Rent</StyleTitle>
        <div style={{display: 'flex'}}>
          <Section/>
          <div onClick={()=> toggleHandler('Rent')}>{rentToggle ? <UpIcon/> : <DownIcon />}</div>
        </div>
      </StyleSection>
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Sell</StyleTitle>
        <div style={{display: 'flex'}}>
          <Section/>
          <div onClick={()=> toggleHandler('Sell')}>{sellToggle ? <UpIcon/> : <DownIcon />}</div>
        </div>
      </StyleSection>
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Home Loans</StyleTitle>
        <div style={{display: 'flex'}}>
          <Section/>
          <div onClick={()=> toggleHandler('Home Loans')}>{homeToggle ? <UpIcon/> : <DownIcon />}</div>
        </div>
      </StyleSection>
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Agent finder</StyleTitle>
        <div style={{display: 'flex'}}>
          <Section/>
          <div onClick={()=> toggleHandler('Agent finder')}>{agentToggle ? <UpIcon/> : <DownIcon />}</div>
        </div>
      </StyleSection>
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Manage Rentals</StyleTitle>
        <div style={{display: 'flex'}}>
          <Section/>
          <div onClick={()=> toggleHandler('Manage Rentals')}>{manageToggle ? <UpIcon/> : <DownIcon />}</div>
        </div>
      </StyleSection> */}
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Advertise</StyleTitle>
      </StyleSection>
      <StyleSection>
        <StyleTitle style={{fontSize: 17}}>Help</StyleTitle>
      </StyleSection>
    </>
    
  )
}

export default TabletView;
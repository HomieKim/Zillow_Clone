import React from "react";
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {ReactComponent as House} from '../dummy/equal-housing.svg';
const StyleDiv = styled.div`
  margin : auto;
  text-align : center;
  padding : 24px 0;
  color: #54545A;
  font-size : 12px;
  p{
    width : 100%;
    margin : 12px 0;;
    a{
      color :#0D4599;
      text-decoration : underline;
      :visited {
        color : #5b33ad;
      }
      
    }
    span {
      font-size : 15px;
    }
  }

`;
const StyleIcon = styled(FontAwesomeIcon)`
  width : 32px;
  height : 32px;
  vertical-align : bottom;
  margin-left: 10px;
`

const Contact = () => {
  return (
    <StyleDiv>
      <p>
        Zillow Group is committed to ensuring digital accessibility for
        individuals with disabilities. We are continuously working to improve
        the accessibility of our<br/> web experience for everyone, and we welcome
        feedback and accommodation requests. If you wish to report an issue or
        seek an accommodation, please <br/> 
        <a href='https://zillow.zendesk.com/hc/en-us/requests/new?ticket_form_id=39140'>let us know </a>
      </p>
      <p>
        Zillow, Inc. holds real estate brokerage licenses in multiple states.
        Zillow (Canada), Inc. holds real estate brokerage licenses in multiple
        provinces. A list of <br/>our real estate licenses is available 
        <a href='https://www.zillow.com/z/info/real-estate-licenses/'>here.</a> <br/>TREC:
        <a href='https://github.com/HomieKim'>Information about brokerage services,</a> <a href='https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-3.pdf'>Consumer protection notice</a><br/>
        California DRE #1522444
      </p>
      <p><span><a href='https://www.zillow.com/z/info/contact-us/'>Contact Zillow, Inc. Brokerage</a></span></p>
      <p>
        For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
        REALTOR® logo are controlled by The Canadian Real Estate Association
        (CREA) and<br/> identify real estate professionals who are members of CREA.
        The trademarks MLS®, Multiple Listing Service® and the associated logos
        are owned by CREA <br/>and identify the quality of services provided by real
        estate professionals who are members of CREA. Used under license.
      </p>
      <div>
        <a href='https://www.zillow.com/z/buying/app-download/'>
          <img style={{width:130, height: 56}} alt='appstore' src='https://www.churchoftheopendoor.com/wp-content/uploads/2019/08/app-store-badge.png'/>
        </a>
        <a href='https://www.zillow.com/z/buying/app-download/'>
        <img style={{width:130, height: 56}} alt='appstore' src='https://www.churchoftheopendoor.com/wp-content/uploads/2019/08/google-play-badge-1.png'/>
        </a>
      </div>
      <div style={{marginTop : 20}}>
        <img style={{marginRight : 20}} src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg' alt='logo'/>
        <span style={{fontStyle:'italic', fontSize :14}}>
          Follow us:    
          <StyleIcon icon={faFacebook} color='#1877F2'/>
          <StyleIcon icon={faInstagram}/>
          <StyleIcon icon={faTiktok} color='#006aff'/>
          <StyleIcon icon={faTwitter} color='#55ACEE'/>
          
        </span>
        <span style={{margin: '0 8px', fontStyle:'italic', fontSize :14}}>© 2006-2022 Zillow</span>
        <House />
      </div>
    </StyleDiv>
  );
};

export default Contact;

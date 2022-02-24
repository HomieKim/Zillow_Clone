import React from 'react';
import { Card } from 'antd';
import styled from '@emotion/styled';

const CardStyle = styled.css`
  width : 300px;
`
const CustomCard = styled(Card)`
  width : 200px;
  height : 300px;
`


const Card_Contents = () => {
  return(
    <CustomCard
      hoverable
      cover={<img alt="example" src="https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.png" />}
    >
      <Card.Meta title="buy home"description="haobhiojldksfjlksdjflke"/>
    </CustomCard>
  )
}

export default Card_Contents;
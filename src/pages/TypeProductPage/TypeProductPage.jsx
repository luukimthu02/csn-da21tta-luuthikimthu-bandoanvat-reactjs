import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CartComponent from '../../components/CartComponent/CartComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
import CartDrinkComponent from '../../components/CartDrinkComponent/CartDrinkComponent'
import CartFruitComponent from '../../components/CartFruitComponent/CartFruitComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

export const TypeProductPage = () => {
  return (
     <>
    <div style={{padding: '0 120px', background: '#efefef'}}>
    <Row style={{flexWrap:'nowrap', paddingTop: '10px'}}>
       < WrapperNavbar span={4} >
            < NavbarComponent/>
       </ WrapperNavbar>
       <Col span={20}>
       <WrapperProducts  >
            <CartComponent/>
            <CartDrinkComponent/>
            <CartFruitComponent/>
       </WrapperProducts>
       <Pagination defaultCurrent={1} total={50} style={{textAlign: 'center', marginTop: '15px'}} />
       </Col>
     
    </Row>
    </div>
     <FooterComponent/>
     
   
    </>
  )
}

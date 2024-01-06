import React from 'react'
import { StyleNameProduct, WrapperCartStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
    StarFilled
} from '@ant-design/icons';
import { formatter } from '../../formater';
import { WrapperButtonCart } from '../CartComponent/style';
import { IoCartOutline } from 'react-icons/io5';
import { WrapperProducts } from '../../pages/Homepages/style';


const CartDrinkComponent = () => {
    
    const product =[
        {
            "id": 1,
            "name": "Sữa tươi trân châu đường đen",
            "price": 17000,
            "buy": "Đã bán 97+",
            "sale": "7%",
            "thumbnail": require ("../../asset/images/drink1.jpg")
        },
        {
            "id": 2,
            "name": "Trà chanh dây",
            "buy": "Đã bán 241+",
            "price": 23000,
            "thumbnail": require ("../../asset/images/drink_chanh_day.jpg")
        },
        {
            "id": 3,
            "name": "Nước cam",
            "buy": "Đã bán 121+",
            "price": 15000,
            "thumbnail": require ("../../asset/images/drink_nuoc_cam.jpg")
        },
        {
            "id": 4,
            "name": "Sinh tố xoài",
            "buy": "Đã bán 346+",
            "price": 30000,
            "thumbnail":  require ("../../asset/images/drink_sinh_to_xoai.jpg")
        },
        {
            "id": 5,
            "name": "Trà dâu tây",
            "buy": "Đã bán 238+",
            "price": 32000,
            "thumbnail": require ("../../asset/images/drink_tra_dau.jpg")
        },        {
            "id": 6,
            "name": "Nước ép ổi",
            "buy": "Đã bán 66+",
            "price": 30000,
            "thumbnail": require ("../../asset/images/drink5.jpg")
        },
        {
            "id": 7,
            "name": "Chè dưỡng nhan",
            "buy": "Đã bán 126+",
            "price": 28000,
            "thumbnail": require ("../../asset/images/drink_che_duong_nhan.jpg")
        }, 
        {
            "id": 8,
            "name": "Trà mãng cầu",
            "buy": "Đã bán 266+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/drink_tra_mang_cau.jpg")
        }, 
        {
            "id": 9,
            "name": "Trà tắc",
            "buy": "Đã bán 426+",
            "price": 17000,
            "thumbnail": require ("../../asset/images/drink_tra_tac.jpg")
        }, 

    ]
  return (
        <>
    <WrapperProducts>
    {product.map((product)=>(
    <div style={{ gap:'15px',marginTop: '10px', flexWrap: 'wrap', justifyContent: 'center', paddingLeft: '12px',}}>
       <WrapperCartStyle 
        hoverable
        headStyle={{width:'200px', height:'200px'}}
        style={{ width: 200, borderRadius: '5px'}}
        bodyStyle={{padding: '10px' }}
        cover={<img alt="example" src={product.thumbnail} />}
    >
        <StyleNameProduct style={{fontSize: '18px', fontWeight: '600', fontFamily: 'serif',textAlign: 'center'}}>{product.name}</StyleNameProduct>
       <WrapperReportText > 
        <span style={{marginRight: '4px'}}>
            <span>{product.rating}</span>
            <StarFilled style={{ fontSize:'12px', color: 'yellow'}} /> 
            <WrapperStyleTextSell style={{paddingLeft: '10px'}}>| {product.buy}</WrapperStyleTextSell>
        </span>
        </WrapperReportText >
        <WrapperPriceText >
            <span style={{marginRight: '8px'}}>{formatter(product.price)}</span>
            <WrapperDiscountText>
               {product.sale}
            </WrapperDiscountText>
        </WrapperPriceText>
        <WrapperButtonCart href='#' style={{textDecoration: 'none',justifyContent: 'center', display: 'flex', fontFamily: 'serif', fontWeight: '600', border: '1px solid #f2c53d', cursor: 'pointer'}}>
            Thêm vào 
            <div style={{alignItems: 'center', fontSize: '18px', paddingLeft:'5px', marginTop:'-5px'}} >
                <IoCartOutline/>
            </div>
         </WrapperButtonCart>
    </WrapperCartStyle>
    </div> 
     
    ))}
    </WrapperProducts>

</>
  )
};
export default CartDrinkComponent;

import React from 'react'
import FooterComponent from '../FooterComponent/FooterComponent'
import HeroImage from '../../asset/images/hero1.png'
import Certificate from '../../asset/images/certi.png'
// import Process1 from '../../asset/images/process1.png'
// import Process2 from '../../asset/images/process2.png'
// import Process3 from '../../asset/images/process3.png'
import Turnip from '../../asset/images/turnip.png'
import Celery from '../../asset/images/Celery.png'
import Amaranth  from '../../asset/images/Amaranth.png'
import Veg1  from '../../asset/images/fresh-orange-juice-glass-dark-background.jpg'
import Veg2  from'../../asset/images/featitem6.jpg'
import Veg3  from '../../asset/images/featitem5.jpeg'



import { HProduct } from './HProduct'
export const AboutComponent = () => {
    return (
        <>
        <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
            <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-5">
                <img
                src={HeroImage}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
                />
            </div>
            <div className="col-lg-6 py-5 hero-text">
                <h1 className="display-1 fw-bold lh-1 mb-3">
                <span>Thực phẩm sạch,không hóa chất độc hại</span>
                </h1>
                <div className="d-flex align-items-center my-5">
                <img src={Certificate} alt="" className="me-3"/>
                <p className="fw-bold">Đạt tiêu chuẩn 
                    <br />không lo đau bụng</p>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                </div>
            </div>
            </div>
        </div>

        {/* <div className="container px-4 py-5 delivery-process">
            <h2 className='text-center display-4 mt-4 fw-bold'>Các loại sản phẩm mới</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col px-5 text-center">
                <div className="mb-3">
                <img src={Process1} className='w-50 h-50' alt="" />
                </div>
                <h5>Rau củ quả sấy lạnh</h5>
                <p>
                    Giữ được hương vị của các loại rau quả trái mùa
                </p>
            </div>
            <div className=" col px-5 text-center">
                <div className="mb-3">
                <img src={Process2} className='w-50 h-50' alt="" />
                </div>
                <h5>Trái cây sấy dẻo</h5>
                <p>
                Có thể ăn hoặc tặng vào những ngày lễ tết
                </p>
            </div>
            <div className=" col px-5 text-center">
                <div className="mb-3">
                <img src={Process3} className='w-50 h-50' alt="" />
                </div>
                <h5>Nước ép rau củ quả</h5>
                <p>
                    Phù hợp với những người không thể ăn trực tiếp rau củ quả
                </p>
            </div>
            </div>
        </div> */}

        <div className="container-fluid px-4 py-5 healthy">
        <h2 className='text-center display-4 mt-4 fw-bold'>
            Khuyến khích ăn những thực phẩm sạch mỗi ngày
        </h2>
        <div classNam='container mt-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <HProduct 
                Image = {Veg1}
                Image2 = {Turnip}
                Title = "Nước ép"
                Description = "Uống nước ép trái cây tươi cung cấp cho bạn nhiều năng lượng"
            />
            <HProduct 
                Image = {Veg2}
                Image2 = {Amaranth}
                Title = "Trái cây"
                Description = "Ăn trái cây mỗi ngày giúp kháng viêm, ngăn ngừa các bệnh mạn tính, củng cố sức khỏe đường ruột, giúp bù nước, đẹp da và hỗ trợ giảm cân"
            />
            <HProduct 
                Image = {Veg3}
                Image2 = {Celery}
                Title = "Thực phẩm tươi sống"
                Description = "Ăn những thực phẩm sạch giúp cuộc sống lành mạnh"
            />
        </div>
        </div>
        </div>
        <FooterComponent/>
        </>
    )
}

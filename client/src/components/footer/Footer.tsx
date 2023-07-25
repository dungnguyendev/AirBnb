import { GlobalOutlined, UpOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React, { useState } from 'react'
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
const Footer = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };




    return (

        <footer className="footer__airbnb">


            <div className='container__Footer'>
                <div className="box__footer__fixed">
                    <h4>© 2022 Airbnb, Inc. <a href="#"> · Quyền riêng tư</a><a href="#"> · Điều khoản</a><a href="#"> · Sơ đồ trang web</a></h4>
                    <div className="">
                        <div className='box__group__footer'>
                            <div className='box__vietSub'> <GlobalOutlined className='global__footer' /> Tiếng Việt (VN)</div>
                            <div className='denominations__footer'>$ USD</div>
                            <div className='button__detail__footer' onClick={showDrawer}>
                                Hỗ trợ và tài nguyên <UpOutlined classID='upout__antd' />
                            </div>

                        </div>
                        <Drawer
                            placement="bottom"
                            onClose={onClose}
                            open={open}
                        >
                            <Row gutter={30}>
                                <Col xs={12} sm={12} md={6} lg={6} >
                                    <h4 className='title__footer'>Hỗ Trợ</h4>
                                    <ul className="content__title__footer">
                                        <li>
                                            <a href="#" >Trung tâm trợ giúp</a>
                                        </li>
                                        <li>
                                            <a href="#" >AirCover</a>
                                        </li>
                                        <li>
                                            <a href="#" >Thông tin an toàn</a>
                                        </li>
                                        <li>
                                            <a href="#" >Hỗ trợ người khuyết tật</a>
                                        </li>
                                        <li>
                                            <a href="#" >Các tùy chọn hủy</a>
                                        </li>
                                        <li>
                                            <a href="#" >Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                                        </li>
                                        <li>
                                            <a href="#" >Báo cáo lo ngại của hàng xóm</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} >
                                    <h4 className='title__footer'>Cộng Đồng</h4>
                                    <ul className="content__title__footer">
                                        <li>
                                            <a href="#" >Airbnb.org: nhà ở cứu trợ</a>
                                        </li>
                                        <li>
                                            <a href="#" >Hỗ trợ dân tị nạn Afghanistan</a>
                                        </li>
                                        <li>
                                            <a href="#" >Chống phân biệt đối xử</a>
                                        </li>

                                    </ul>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} >
                                    <h4 className='title__footer'>Đón tiếp khách</h4>
                                    <ul className="content__title__footer">
                                        <li>
                                            <a href="#" >Thử đón tiếp khách</a>
                                        </li>
                                        <li>
                                            <a href="#" >AirCover cho Chủ nhà</a>
                                        </li>
                                        <li>
                                            <a href="#" >Xem tài nguyên đón tiếp khách</a>
                                        </li>
                                        <li>
                                            <a href="#" >Truy cập diễn đàn cộng đồng</a>
                                        </li>
                                        <li>
                                            <a href="#" >Đón tiếp khách có trách nhiệm</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} >
                                    <h4 className='title__footer'>Airbnb</h4>
                                    <ul className="content__title__footer">
                                        <li>
                                            <a href="#" >Trang tin tức</a>
                                        </li>
                                        <li>
                                            <a href="#" >Tìm hiểu các tính năng mới</a>
                                        </li>
                                        <li>
                                            <a href="#" >Thư ngỏ từ các nhà sáng lập</a>
                                        </li>
                                        <li>
                                            <a href="#" >Cơ hội nghề nghiệp</a>
                                        </li>
                                        <li>
                                            <a href="#" >Nhà đầu tư</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Drawer>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
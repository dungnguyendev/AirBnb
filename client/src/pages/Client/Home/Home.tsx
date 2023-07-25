import { Card, Col, Pagination, Row } from 'antd'
import React, { useEffect } from 'react'
import RoomList from '../../../components/roomList/RoomList'
import { useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../../store'
import { getListLocationRoom } from '../../../store/managerLocationRoom.services/thunkAction'
import { useSelector } from 'react-redux'
const Home = () => {
    const navigate = useNavigate()
    const AppDispatch = useAppDispatch()
    const selectListLocation = (id: number) => {
        navigate(`/mapRoom/${id}`)
    }
    const { listLocation } = useSelector((state: RootState) => state.managerLocation)



    useEffect(() => {
        AppDispatch(getListLocationRoom())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const hadleList = () => {
        return listLocation?.map((item, i) => {
            return <Col key={i} xs={24} sm={12} md={8} lg={6} style={{ margin: "5px 0", cursor: "pointer" }}>
                <Card
                    onClick={() => { selectListLocation(item.id) }}
                    className="card__tours"
                    style={{
                        height: 240,
                        border: "none"

                    }}
                    cover={<div className='box__image__hiden'><img className='img__tour__location' alt="example" src={item.image} width="100%" height={240} style={{ objectFit: "cover" }} /></div>}
                >
                    <Card.Meta title={item.nameLocation} description={item.province + " - " + item.country} />
                </Card>
            </Col>
        });
    }
    return (
        <section>
            <div className="section__box">
                <div className="box__title__section">
                    <h2 style={{ fontWeight: 600, margin: 0 }}>Ưu Đãi</h2>
                    <span style={{ opacity: 0.5, fontSize: "16px" }}>Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn</span>
                </div>
                <div className="box__image__section__sales">
                    <Row gutter={50}>
                        <Col xs={24} sm={24} md={24} lg={12} style={{ margin: "10px 0" }}>
                            <div className="box__sales__section">
                                <div className="image__sales">
                                    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/173282684.jpeg?k=e31b490d521194e65d41490f43dc704291ca07eaa762b6f36bca714d3211b9a1&o=" width="100%" height="100%" alt="" />
                                </div>
                                <div className="title__sales">
                                    <h3>Tiết kiệm 15% với Ưu Đãi Cuối Năm</h3>
                                    <span>Thực hiện thêm một chuyến đi trong danh sách điểm đến của bạn</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} style={{ margin: "10px 0" }}>
                            <div className="box__sales__section">
                                <div className="image__sales">
                                    <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png" width="100%" height="100%" alt="" />
                                </div>
                                <div className="title__sales">
                                    <h3>Đổi gió một thời gian</h3>
                                    <span>Tận hưởng sự tự do với kỳ nghỉ theo tháng trên airbnb.com</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="location__tours__in__country">
                <div className="box__location__tour">
                    <h2 style={{ fontWeight: 600,margin: 0 }}>Du lịch như người bản địa</h2>
                    <span style={{ opacity: 0.5, fontSize: "16px" }}>Sau đây là một số điểm đến phổ biến gần đó mà bạn có thể cân nhắc</span>
                </div>
                <Row gutter={30}>
                    {
                        hadleList()
                    }

                </Row>
            </div>
            <RoomList />
            <Pagination
                style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
            // onChange={handleChangePage}
            // current={config.currentPage}
            // pageSize={config.pageSize}
            // total={config.totalCount}
            />
        </section>
    )

}



export default Home
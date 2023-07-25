import { Card, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { getListRentedRoomByLocation } from '../../../store/managerRentedRoom.services/thunkAction';
import { getListLocationRoomByID } from '../../../store/managerLocationRoom.services/thunkAction';
const MapRoom = () => {
    const navigate = useNavigate();
    const param = useParams();
    const { rentedRoomByLocation } = useSelector((state: RootState) => state.managerRentedRoom);
    const { listLocationByID } = useSelector((state: RootState) => state.managerLocation);
    const AppDistPatch = useAppDispatch();
    useEffect(() => {
        AppDistPatch(getListRentedRoomByLocation(Number(param?.location)));
        AppDistPatch(getListLocationRoomByID(Number(param?.location)));
    }, [param?.location]);
    const selectDetail = (idRoom: any, idLocation: any) => {
        navigate(`/detail/${idRoom}/${idLocation}`);
    };
    const hadleMapRoomLocation = () => {
        const lenghtListMap = rentedRoomByLocation?.length;
        return listLocationByID?.map((item, i) => {
            return (
                <h2 key={i} style={{ margin: 0 }}>
                    Tìm kiếm theo vị trí{' '}
                    <span>
                        {item.nameLocation} - {item.province}
                    </span>{' '}
                    <span style={{ fontSize: '14px', opacity: 0.5 }}>
                        {' '}
                        <FontAwesomeIcon className="icon__building" icon={faBuildingUser} /> Có{' '}
                        {lenghtListMap} phòng đang cho thuê
                    </span>
                </h2>
            );
        });
    };
    const hadleListMapRoom = () => {
        return rentedRoomByLocation?.map((item, i) => {
            return (
                <Col key={i} xs={24} sm={24} md={24} lg={8}>
                    <Card
                        className="listItem__rented__room"
                        style={{
                            height: '500px',
                            marginBottom: '20px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                        }}
                        hoverable
                        cover={
                            <div className="posision__item__rented">
                                <div className="posision__image__item__rented">
                                    <img
                                        alt="example"
                                        src={item?.image}
                                        style={{
                                            height: '300px',
                                            objectFit: 'cover',
                                            objectPosition: 'center top',
                                        }}
                                    />
                                </div>
                                <div className="posision__icon__item__rented">
                                    <HeartOutlined className="icon__heart" />
                                </div>
                            </div>
                        }
                    >
                        <div
                            onClick={() => {
                                selectDetail(item?.codeRoom, item?.locationCode);
                            }}
                        >
                            <h3 style={{ color: '#222222', height: '40px' }}>
                                {item?.roomName.substring(0, 30)}...
                            </h3>
                            <p style={{ color: '#717171', fontSize: '14px', height: '30px' }}>
                                {item?.guest} Khách - {item?.bedRoom} Phòng - {item?.bed} Giường -{' '}
                                {item?.bathroom} Phòng tắm
                            </p>
                            <p style={{ color: '#717171', height: '30px' }}>
                                {item?.airConditioner === true ? 'Điều hoà, ' : ''}
                                {item?.pool === true ? 'Hồ bơi, ' : ''}
                                {item?.washingMachine === true ? 'Máy giặt, ' : ''}
                                {item?.wifi === true ? 'Wifi..' : ''}
                            </p>
                            <h3 style={{ color: '#222222', height: '20px' }}>
                                {(Number(item.price) * 22100).toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}{' '}
                                / <span style={{ fontWeight: 300 }}>đêm</span>
                            </h3>
                        </div>
                    </Card>
                </Col>
            );
        });
    };

    return (
        <div className="map__room__by__location">
            <div className="box__map__title__1">{hadleMapRoomLocation()}</div>
            <div className="box__map__title__2">
                <Row gutter={20}>{hadleListMapRoom()}</Row>
            </div>
        </div>
    );
};

export default MapRoom;

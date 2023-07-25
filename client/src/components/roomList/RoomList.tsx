import React, { useEffect } from 'react'
import RoomItem from '../roomItem/RoomItem'
import { Col, Row } from 'antd'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { getListRentedRoom } from '../../store/managerRentedRoom.services/thunkAction'
const RoomList = () => {
    const Appdispatch = useAppDispatch()
    const { listRentedRoom } = useSelector((state: RootState) => state.managerRentedRoom)
    useEffect(() => {
        Appdispatch(getListRentedRoom())
    }, [])
    const hadleList = () => {
        return listRentedRoom?.map(item => {
            return <Col key={item.id} xs={24} sm={24} md={24} lg={8} >
                <RoomItem listRented={item} />
            </Col>
        })
    }
    return (
        <div className='container' style={{ marginTop: "50px" }}>
            <div style={{ marginBottom: "30px" }}>
                <h2 style={{ fontWeight: 600, margin: 0, fontSize:"20px" }}>Lưu trú tại các chỗ nghỉ độc đáo hàng đầu</h2>
                <span style={{ opacity: 0.5, fontSize: "16px" }}>Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chúng tôi đều có hết</span>
            </div>
            <Row gutter={20}>
                {
                    hadleList()
                }
            </Row>
        </div>
    )
}


export default RoomList
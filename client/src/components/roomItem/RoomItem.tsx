import { HeartBrokenOutlined } from '@mui/icons-material'
import { Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HeartOutlined } from '@ant-design/icons';
import { getRentedRoom } from '../../services/managerRentedRoom.services';

interface ListRented {
  listRented?: getRentedRoom
}
const RoomItem = ({ listRented }: ListRented) => {

  const navigate = useNavigate();
  const selectDetail = (idRoom: any, idLocation: any) => {
    navigate(`/detail/${idRoom}/${idLocation}`)
  }
  return (
    <div>
      <Card

        className='listItem__rented__room'
        style={{ height: "500px", marginBottom: "20px", borderRadius: "20px", overflow: "hidden" }}
        hoverable
        cover={<div className='posision__item__rented'>
          <div className='posision__image__item__rented'>
            <img alt="example" src={listRented?.image} style={{ height: "300px", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div className='posision__icon__item__rented'>
            <HeartOutlined className='icon__heart' />
          </div>
        </div>}
      >
        <div onClick={() => { selectDetail(listRented?.codeRoom, listRented?.locationCode) }}>
          <h3 style={{ color: "#222222", height: "40px" }}>{listRented?.roomName.substring(0, 30)}...</h3>
          <p style={{ color: "#717171", fontSize: "14px", height: "30px" }}>{listRented?.guest} Khách - {listRented?.bedRoom} Phòng - {listRented?.bed} Giường - {listRented?.bathroom} Phòng tắm</p>
          <p style={{ color: "#717171", height: "30px" }}>
            {(listRented?.airConditioner == true) ? "Điều hoà, " : ""}{(listRented?.pool == true) ? "Hồ bơi, " : ""}{(listRented?.washingMachine == true) ? "Máy giặt, " : ""}{(listRented?.wifi == true) ? "Wifi.." : ""}
          </p>
          <h3 style={{ color: "#222222", height: "20px" }}>{(Number(listRented?.price) * 22100).toLocaleString('vi', {style : 'currency', currency : 'VND'})} / <span style={{ fontWeight: 300 }}>đêm</span></h3>
        </div>
      </Card>
    </div>
  )
}

export default RoomItem
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { getBookingRoom } from '../../../store/managerBookingRoom.services/thunkAction';
import { managerAccout } from '../../../services/managerAccout.services';
import { managerAccountAction } from '../../../store/managerAccount.services/slice';
import { bookingRoom } from '../../../services/managerBookRoom.services';
import { getListLocationRoom } from '../../../store/managerLocationRoom.services/thunkAction';
import { getListRentedRoom } from '../../../store/managerRentedRoom.services/thunkAction';
import { Image } from 'antd';
const BookRoom = () => {
    const { listBooking } = useSelector((state: RootState) => state.managerBookingRoom);
    const { AccountUser } = useSelector((state: RootState) => state.managerAccount);
    const { listRentedRoom } = useSelector((state: RootState) => state.managerRentedRoom);
    const { listLocation } = useSelector((state: RootState) => state.managerLocation);
    const AppDistPatch = useAppDispatch();
    useEffect(() => {
        AppDistPatch(getBookingRoom());
        AppDistPatch(managerAccountAction.getUser({}));
        AppDistPatch(getListRentedRoom());
        AppDistPatch(getListLocationRoom());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleLocation = (code: number): React.ReactNode | null => {
        const foundLocation = listLocation?.find((item) => item.id === code);
        if (!foundLocation) return null;
        return (
            <>
                <p>Địa điểm: {foundLocation.nameLocation} - {foundLocation.province}</p>
            </>
        );
    };
    const handleNameRoom = (code: number): React.ReactNode | null => {
        const foundRoom = listRentedRoom?.find((item) => item.codeRoom === code);
        if (!foundRoom) return null;
        return (
            <>
                <p>Tên phòng: {foundRoom.roomName}</p>
                {handleLocation(foundRoom.locationCode)}
            </>
        );
    };
    const handleImge = (code: number): React.ReactNode | null => {
        const imageRoom = listRentedRoom?.find((item) => item.codeRoom === code);
        if (!imageRoom) return null;
        return <Image src={imageRoom.image} alt="" width="100%" />;
    };
    const handleListBooking = () => {
        if (listBooking?.find((item) => item.userCode === AccountUser?.code)) {
            return listBooking?.map((item, i) => {
                return (
                    <div className="box__list" key={i}>
                        <div>
                            <p>Mã phòng: {item.roomCode}</p>
                            <p>Ngày tới: {item.arrivalDay}</p>
                            <p>Ngày đi: {item.dayOut}</p>
                            {handleNameRoom(item.roomCode)}
                        </div>
                        <div>{handleImge(item.roomCode)}</div>
                    </div>
                );
            });
        }
        return (
            <div className="content__notification">
                <p className="content__notification__1">
                    Chưa có chuyến đi nào được đặt... vẫn chưa!
                </p>
                <p className="content__notification__2">
                    Đã đến lúc phủi bụi hành lý và bắt đầu chuẩn bị cho chuyến phiêu lưu tiếp theo
                    của bạn rồi
                </p>
                <button className="btn__seach__bookRoom">
                    <NavLink to={'/'}>Bắt đầu tìm kiếm</NavLink>
                </button>
            </div>
        );
    };

    return (
        <div className="book__room">
            <div className="notification">
                <div className="title__bookRoom">
                    <h2>Chuyến đi</h2>
                </div>
                <div className="box__list__1">{handleListBooking()}</div>

                <div className="support__bookRoom">
                    <p>
                        Bạn không tìm thấy đặt phòng/đặt chỗ của mình ở đây?{' '}
                        <NavLink to={'/'} className="link__support">
                            Truy cập Trung tâm trợ giúp
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookRoom;

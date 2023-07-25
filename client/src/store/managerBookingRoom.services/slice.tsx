import { createSlice } from '@reduxjs/toolkit';
import { bookingRoom1, getBookingRoom } from './thunkAction';
import { toast } from 'react-toastify';
import { bookingRoom } from '../../services/managerBookRoom.services';
// import { toast } from "react-toastify"

type managerbookingRoomInitialState = {
    listBooking?: bookingRoom[];
    isLoadingBookingRoom: boolean;
};
const initialState: managerbookingRoomInitialState = {
    isLoadingBookingRoom: false,
};
export const { reducer: managerbookingRoomReducer, actions: managerbookingRoomAction } =
    createSlice({
        name: 'managerBookingRoom',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(bookingRoom1.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    toast.success('Bạn đã đặt phòng thành công');
                }
            });
            builder.addCase(getBookingRoom.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    state.listBooking = action.payload.data;
                }
            });
        },
    });

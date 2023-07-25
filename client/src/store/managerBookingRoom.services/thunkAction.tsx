import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookingRoom, managerbookingRoom } from "../../services/managerBookRoom.services";

export const bookingRoom1 = createAsyncThunk(
    "Airbnb/BookingRoom",
    async (payload: bookingRoom, { rejectWithValue }) => {
        try {
            const res = await managerbookingRoom.upBookingRoom(payload)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getBookingRoom = createAsyncThunk(
    "Airbnb/getBookingRoom",
    async (_, { rejectWithValue }) => {
        try {
            const res = await managerbookingRoom.getBookingRoom()
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
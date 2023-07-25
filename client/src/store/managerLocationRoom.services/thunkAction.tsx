import { createAsyncThunk } from '@reduxjs/toolkit'
import { managerLocationRoom } from '../../services/managerLocationRoom.services'
export const getListLocationRoom = createAsyncThunk(
    "AirbnbLocation/listLocation",
    async (_, { rejectWithValue }) => {
        try {
            const res = await managerLocationRoom.getLocationRoom()
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getListLocationRoomByID = createAsyncThunk(
    "AirbnbLocation/listLocationByID",
    async (id: number, { rejectWithValue }) => {
        try {
            const res = await managerLocationRoom.getLocationRoomById(id)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getListLocationRoomBySearch = createAsyncThunk(
    "Airbnb/listLocationBySearch",
    async (search: string, { rejectWithValue }) => {
        try {
            const res = await managerLocationRoom.getLocationSearch(search)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
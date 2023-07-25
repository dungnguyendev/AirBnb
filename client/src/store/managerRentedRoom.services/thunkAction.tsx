import { createAsyncThunk } from '@reduxjs/toolkit'
import { managerRentedRoom } from '../../services/managerRentedRoom.services'
export const getListRentedRoom = createAsyncThunk(
    "AirbnbRented/listRentedRoom",
    async (_, { rejectWithValue }) => {
        try {
            const res = await managerRentedRoom.getRentedRoom()
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getListRentedRoomByID = createAsyncThunk(
    "AirbnbRented/listRentedRoomById",
    async (id: number, { rejectWithValue }) => {
        try {
            const res = await managerRentedRoom.getRentedRoomById(id)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getListRentedRoomByLocation = createAsyncThunk(
    "AirbnbRented/listRentedRoomByLocation",
    async (id: number, { rejectWithValue }) => {
        try {
            const res = await managerRentedRoom.getRentedRoomByLocation(id)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getListRentedRoomSearch = createAsyncThunk(
    "AirbnbRented/listRentedRoomBySearch",
    async (search: string, { rejectWithValue }) => {
        try {
            const res = await managerRentedRoom.getRentedSearch(search)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
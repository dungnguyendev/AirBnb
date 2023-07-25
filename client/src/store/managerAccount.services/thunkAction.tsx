import { createAsyncThunk } from '@reduxjs/toolkit'
import { accountTypes, managerAccout } from '../../services/managerAccout.services'
export const registerAirBnb = createAsyncThunk(
    "AirbnbAccount/register",
    async (form: accountTypes, { rejectWithValue }) => {
        try {
            const res = await managerAccout.register(form)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const loginAirBnb = createAsyncThunk(
    "AirbnbAccount/loginAirBnb",
    async (form: accountTypes, { rejectWithValue }) => {
        try {
            const res = await managerAccout.login(form)
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

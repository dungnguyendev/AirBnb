import { type } from "os";
import { getLocationRoom } from "../../services/managerLocationRoom.services";
import { createSlice } from "@reduxjs/toolkit";
import { getListLocationRoom, getListLocationRoomByID, getListLocationRoomBySearch } from "./thunkAction";

type managerLocationRoomInitialState = {
    listLocation?: getLocationRoom[]
    listLocationByID?: getLocationRoom[]
    listLocationBySearch?: getLocationRoom[]
    isLoadingLocation: boolean
}
const initialState: managerLocationRoomInitialState = {
    isLoadingLocation: false
}
export const { reducer: managerLocationRoomReducer, actions: managerLocationRoomAction } = createSlice({
    name: "managerLocationRoom",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getListLocationRoom.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    state.listLocation = action.payload.data
                }
            })
            .addCase(getListLocationRoomByID.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    state.listLocationByID = action.payload.data
                }
            })
            .addCase(getListLocationRoomBySearch.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    state.listLocationBySearch = action.payload.data
                }
            })
    }
})
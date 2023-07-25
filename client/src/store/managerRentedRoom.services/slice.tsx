
import { createSlice } from "@reduxjs/toolkit";
import { getRentedRoom } from "../../services/managerRentedRoom.services";
import { getListRentedRoom, getListRentedRoomByID, getListRentedRoomByLocation, getListRentedRoomSearch } from "./thunkAction";


type managerLocationRoomInitialState = {
  listRentedRoom?: getRentedRoom[]
  rentedRoomByID?: getRentedRoom[]
  rentedRoomByLocation?: getRentedRoom[]
  listrentedRoomBySearch?:getRentedRoom[]
  isLoadingRentedRoom: boolean
}
const initialState: managerLocationRoomInitialState = {
  isLoadingRentedRoom: false
}
export const { reducer: managerRentedRoomReducer, actions: managerRentedRoomAction } = createSlice({
  name: "managerRentedRoom",
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getListRentedRoom.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.listRentedRoom = action.payload.data
        }
      })
      .addCase(getListRentedRoomByID.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.rentedRoomByID = action.payload.data
        }
      })
      .addCase(getListRentedRoomByLocation.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.rentedRoomByLocation = action.payload.data
        }
      })
      .addCase(getListRentedRoomSearch.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.listrentedRoomBySearch = action.payload.data
        }
      })
  }
})
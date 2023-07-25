import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'

import { managerLocationRoomReducer } from './managerLocationRoom.services/slice'
import { useDispatch } from 'react-redux'
import { managerRentedRoomReducer } from './managerRentedRoom.services/slice'
import { managerAccountAction, managerAccountReducer } from './managerAccount.services/slice'
import { managerbookingRoomReducer } from './managerBookingRoom.services/slice'
export const store = configureStore({
    reducer: {
        managerLocation: managerLocationRoomReducer,
        managerRentedRoom: managerRentedRoomReducer,
        managerAccount: managerAccountReducer,
        managerBookingRoom: managerbookingRoomReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false, // Tắt kiểm tra tuần tự hóa
    }),
})
store.dispatch(managerAccountAction.getUser);
export type RootState = ReturnType<typeof store['getState']>
export type AppDispatch = typeof store['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
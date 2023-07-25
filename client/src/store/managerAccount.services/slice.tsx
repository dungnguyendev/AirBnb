import { createSlice } from '@reduxjs/toolkit';
import { accountTypes, localUser } from '../../services/managerAccout.services';
import { loginAirBnb, registerAirBnb } from './thunkAction';
import { toast } from 'react-toastify';
type managerAccountInitialState = {
    AccountUser?: localUser;
    // listLocationByID?: accountTypes[]
    // listLocationBySearch?: getLocationRoom[]
    isLoadingAccout: boolean;
    shouldRedirect: boolean;
};
const initialState: managerAccountInitialState = {
    isLoadingAccout: false,
    shouldRedirect: false,
};
export const { reducer: managerAccountReducer, actions: managerAccountAction } = createSlice({
    name: 'managerAccount',
    initialState,
    reducers: {
        logOut: (state, action) => {
            localStorage.removeItem('user');
            toast.error('Goodbye 😉');
        },
        getUser: (state, action) => {
            const data = localStorage.getItem('user');
            if (data) {
                state.AccountUser = JSON.parse(data);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAirBnb.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    alert('Tạo thành công');
                }
            })
            .addCase(loginAirBnb.pending, (state, action) => {
                state.isLoadingAccout = true;
            })
            .addCase(loginAirBnb.rejected, (state, action) => {
                if (action.error.message) {
                    state.isLoadingAccout = false;
                }
            })
            .addCase(loginAirBnb.fulfilled, (state, action) => {
                if (action.payload !== undefined) {
                    if (action.payload.status === 200) {
                        localStorage.setItem('user', JSON.stringify(action.payload.data));
                        state.shouldRedirect = true;
                    }
                }
            });
    },
});

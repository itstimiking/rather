import {createSlice} from '@reduxjs/toolkit';
import {_getUsers} from "../../../_DATA";

// Initial store 
export const initialState = {
    hasError:false,
    loading: false,
    user: {},
    users:{}
};

// Questions slice
const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startLoading: (state) =>{
            state.loading = true;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        getAllUsers: (state, action) =>{
            state.users = action.payload ;
            state.loading = false;
            state.hasError = false;
        },
        getUsersFailure: (state) => {
            state.hasError = true
        }
    },
});

// Actions generated from the slice
export const {
    setUser,
    getAllUsers,
    getUsersFailure,
    startLoading
} = slice.actions;

// export The reducer
export default slice.reducer;

// Thunk Actions
export const fetchAllUsers = ()=> async (dispatch) => {
    try {
        dispatch(startLoading());

        const response = await _getUsers()

        dispatch(getAllUsers(response));

    }catch(err){

    }
};

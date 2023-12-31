import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  userName: undefined,
  userID: undefined,
  name: undefined,
};

/*const initialState = {
  value: 0,
  status: 'idle',
};

*/
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

/*export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
*/
export const userSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },

    // displayColor: (state, action) => {
    //   state.value = action.payload;
    // },
  },
});
/*


export const { changeToRed, changeToBlue, changeToGreen } = colorSlice.actions;
/*export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
*/

// export const selectColor = (state) => state.color.value;
export default userSlice.reducer;

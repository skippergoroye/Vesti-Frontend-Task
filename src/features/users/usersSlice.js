import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
  items: []
};


const usersSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    addDetails: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(firstName, lastName, email, skills) {
        return {
          payload: {
            id: nanoid(),
            firstName,
            lastName,
            email,
            skills,
          },
        };
      },
    },
  },
});

export const { addDetails, removeItem } = usersSlice.actions;

export default usersSlice.reducer;

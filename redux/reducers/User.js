import {createSlice} from '@reduxjs/toolkit';

const initValue = {
  firstName: 'Panha',
  lastName: 'Rithy',
  profileUri:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};
const Users = createSlice({
  initialState: initValue,
  name: 'User',
  reducers: {
    addNewUser(state, action) {},
    resetInitState(state, action) {
      return initValue;
    },
  },
});

export const {addNewUser,resetInitState} = Users.actions;
export default Users.reducer;

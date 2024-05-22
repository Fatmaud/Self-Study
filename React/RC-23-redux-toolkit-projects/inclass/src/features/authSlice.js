//? Slice ile bir global state'in hem action type'lari , hem action creator fonksiyonlarini hem de reducer'i tek bir hamlede olusturabiliriz.
import { createSlice } from "@reduxjs/toolkit";

// const myState = {
//     user:null,
// };
const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  // initialState:myState,
  initialState, //===initialState:initialState
  reducers: {
    //? action creator fonks. ve reducer icin
    loginSuccess: (state, action) => {
      // console.log(action.payload)
      state.user = action.payload; //Bunu redux ta "return" ile ve farkli yapida yazdik.
    },
    logoutSuccess: (state) => {
      state.user = null; //== state=InitialState de yazabiliriz
    },
  },
});

//?Slice yapısı ile Action’lar otomatik olarak oluşturuluyor. olusan action fonksiyonları sliceAdi.actions 'dan destructure edilerek export edilir.
export const { loginSuccess, logoutSuccess } = authSlice.actions;

//? yazilan slice'in reducer'i sliceAdi.reducer seklinde export edilmelidir.
export default authSlice.reducer;

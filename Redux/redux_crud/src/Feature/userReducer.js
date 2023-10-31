import axios from "axios";

const userObject = {
   allUser: [],
   name: "Tirth Rathod"
};

const userReducer = (state = userObject, action) => {
   switch (action.type) {
      case "alldata":
         return {
            ...state,
            allUser: action.payload
         }
   }
   return state;
}

export default userReducer;

export const fetchUser = (api) => {
   return function (dispatch) {
      axios.get(api)
         .then((res) => { dispatch(getData(res.data)) });
   }
}

const getData = (data) => ({ type: "alldata", payload: data })

export const deleteData = (api) => {
   return function () {
      axios.delete(api);
   }
}
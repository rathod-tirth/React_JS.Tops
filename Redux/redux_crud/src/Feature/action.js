import axios from "axios";

export const insert = (api, object) => {
   return function () {
      axios.post(api, object);
   };
};

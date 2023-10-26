import { useReducer, useState } from "react"

function UseReducer() {
   const object = {
      name: "Tirth",
      number: 0
   };

   const reducer = (state, dispatch) => {
      if (dispatch.type == "ChangeName") {
         return ({ ...state, name: "Tirth Rathod" });
      }
      if (dispatch.type == "ChangeName") {
         return ({ ...state, name: "Tirth Rathod" });
      }
   }

   const [state, dispatch] = useReducer(reducer, object);

   return (
      <div>
         <button onClick={() => dispatch({ type: "ChangeName" })} >Click</button>
         <h2>My Name is {state.name}</h2>
      </div>
   )
}
export default UseReducer
import { createContext, useState } from "react"
import B from "./B";

export const Context = createContext();

function A() {
   const [name, setName] = useState("Name");
   return (
      <Context.Provider value={{ name, setName }}>
         <p>I am A : {name}</p>
         <button onClick={() => { setName("Tirth") }}>Click</button>
         <B />
      </Context.Provider>
   )
}
export default A
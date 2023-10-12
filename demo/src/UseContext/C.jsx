import { useContext } from "react"
import { Context } from "./A";

function C() {
  const { name, setName } = useContext(Context);
  return (
    <>
      <p>I am C : {name}</p>
      <button onClick={() => { setName("Tirth Rathod") }}>Click</button>
    </>
  )
}
export default C
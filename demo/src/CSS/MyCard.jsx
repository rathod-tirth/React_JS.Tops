import React from 'react'
import "./style.css"
import Style1 from "./style1.module.css";

function MyCard() {
  return (
    <>
    {/* Normal CSS */}
      <section className={Style1.container}>
        <div className="blueCard">myCard1</div>
        <div className="blueCard">myCard2</div>
        <div className="blueCard">myCard3</div>
      </section>
    {/* Module CSS */}
      <section className={Style1.container}>
        <div className={Style1.redCard}>myCard4</div>
        <div className={Style1.redCard}>myCard5</div>
        <div className={Style1.redCard}>myCard6</div>
      </section>
    </>
  )
}

export default MyCard
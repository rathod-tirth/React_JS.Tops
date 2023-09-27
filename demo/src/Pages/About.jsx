import React from 'react'
import CardApp from '../Component/CardApp'
import MyCard from '../CSS/MyCard'
import MyCard2 from '../StyledComp/Styled'

function About() {
  return (
    <>
      <div className="row">
        <CardApp title="Tirth" />
        <CardApp title="Devanshu" />
        <CardApp title="Jay" />
        <MyCard />
        <MyCard2 />
      </div>
    </>
  )
}

export default About

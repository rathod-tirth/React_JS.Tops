import React from 'react'
import styled from 'styled-components'

function Styled() {
  return (
    <div>
      <MyCard>
        <MyImg src="https://www.w3schools.com/bootstrap4/img_avatar3.png"></MyImg>
        <MyInfo>Tirth Rathod</MyInfo>
        <MyBtn>Edit</MyBtn>
      </MyCard>
    </div>
  )
}

export default Styled

const MyCard = styled.div`
  width: 300px;
  height: 400px;
  border: 2px solid gray;
  border-radius: 4px;
  text-align: center;
  line-height: 100px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-flow: column;
  font-family: sans-serif;
`;

const MyImg = styled.img`
  max-width: 300px;
  height: 300px;
  padding: 0;
`;

const MyInfo = styled.p`
  width: 300px;
  height: 10px;
  text-align: center;
  line-height: 10px;
  padding: 20px 0 0;
`;

const MyBtn = styled.button`
  width: 80px;
  height: 40px;
  line-height: 10px;
  background: royalblue;
  color: white;
  border: 2px solid royalblue;
  border-radius: 4px;
  padding: ;
  margin: 5px auto;
  transition: 0.3s ease;

  &:hover{
    background: white;
    border: 2px solid navy;
    color: navy;
  }
`;
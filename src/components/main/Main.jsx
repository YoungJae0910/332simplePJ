import React from "react";
import styled from "styled-components";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export default function main() {
  return (
    <WrapDiv>
      <Login />
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

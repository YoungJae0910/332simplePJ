import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignUp from "../SignUp/SignUp";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userIdHandler = (e) => {
    // console.log(e.target.value);
    setUserId(e.target.value);
  };

  const userPasswordHandler = (e) => {
    // console.log(e.target.value);
    setUserPassword(e.target.value);
  };

  return (
    <WrapDiv>
      <InputBox>
        <InputPlace
          type="text"
          placeholder="ID"
          value={userId}
          onChange={userIdHandler}
        />
        <InputPlace
          type="password"
          placeholder="PW"
          value={userPassword}
          onChange={userPasswordHandler}
        />
      </InputBox>
      <ButtonDiv>
        <LoginButton>Login</LoginButton>
        <Link to="signup">
          <SignUpButton>SignUp</SignUpButton>
        </Link>
      </ButtonDiv>
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 500px;
  height: 250px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const LoginButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 15px;
  margin-top: 30px;
  border: none;
  cursor: pointer;
`;
const SignUpButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const InputPlace = styled.input`
  width: 280px;
  height: 40px;
  text-indent: 15px;
  border-radius: 15px;
  border: 1px solid black;
`;

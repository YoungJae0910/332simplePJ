import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

export default function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (e) => {
    console.log(id);
    setId(e.target.value);
  };

  const handlePhoneNum = (e) => {
    console.log(phoneNum);
    setPhoneNum(e.target.value);
  };

  const handlePw = (e) => {
    console.log(pw);
    setPw(e.target.value);
  };

  const newUser = {
    uuid: uuid(),
    id,
    pw,
    phoneNum,
  };

  const addUser = async () => {
    if (id && pw && phoneNum) {
      await axios.post("http://localhost:3001/User", newUser);
      alert("회원가입 성공!");
      navigate("/");
    } else {
      alert("입력정보를 확인하세요");
    }
  };

  return (
    <ContainerDiv>
      <WrapDiv>
        <InputBox>
          <InputPlace placeholder="ID" value={id} onChange={handleId} />
          <InputPlace
            placeholder="PhoneNum"
            value={phoneNum}
            onChange={handlePhoneNum}
          />
          <InputPlace
            type="password"
            placeholder="PW"
            value={pw}
            onChange={handlePw}
          />
          <InputPlace placeholder="PWCheack" type="password" />
        </InputBox>
        <SignUpButton onClick={addUser}>SignUp</SignUpButton>
      </WrapDiv>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const WrapDiv = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputPlace = styled.input`
  width: 350px;
  height: 30px;
  text-indent: 10px;
`;

const SignUpButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 50px;
`;

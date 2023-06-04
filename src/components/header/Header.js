import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  h1 {
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: rgba(33, 33, 33, 1);
    margin-left: 32px;
    margin-top: 26px;
  }
  span {
    position: absolute;
    left: 32px;
    top: 55px;
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 500;
    color: rgba(181, 181, 195, 1);
  }
  .input-container {
    margin-top: 27px;
    margin-left: 307px;
    display: flex;
    gap: 33px;
    input {
      padding-left: 15px;
      width: 300px;
      height: 48px;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(226, 225, 229, 1);
      font-family: "Inter";
      font-size: 14px;
      font-weight: 400;
    }
  }
  button {
    margin-right: 60px;
    margin-top: 34px;
    width: 80px;
    height: 34px;
    background-color: rgba(246, 78, 96, 1);
    border: 0px;
    border-radius: 6px;
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

function Header({ addUser, users }) {
  const [name, setName] = useState("");
  const [excuse, setExcuse] = useState("");

  const ChangeName = (event) => {
    setName(event.target.value);
  };

  const ChangeExcuse = (event) => {
    setExcuse(event.target.value);
  };

  const handleCreateClick = () => {
    if (!name.trim() || !excuse.trim()) {
      return alert("გთხოვთ შეავსოთ ყველა ველი.");
    }

    addUser(name.trim(), excuse.trim());
    setName("");
    setExcuse("");
  };

  return (
    <HeaderContainer>
      <h1>Wall of shame</h1>
      <span>{users.length} members</span>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={ChangeName}
        />
        <input
          type="text"
          placeholder="Excuse"
          value={excuse}
          onChange={ChangeExcuse}
        />
      </div>
      <button onClick={handleCreateClick}>Create</button>
    </HeaderContainer>
  );
}

export default Header;

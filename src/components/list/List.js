import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  gap: 295px;
  margin-left: 53px;
  margin-top: 27px;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    right: 58px;
    width: 92px;
    height: 34px;
    border: 0px;
    border-radius: 6px;
    background-color: rgba(201, 247, 245, 1);
    color: rgba(27, 197, 189, 1);
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    font-family: "Poppins";
    font-weight: 600;
    color: rgba(70, 78, 95, 1);
  }

  span {
    font-size: 13px;
    color: rgba(181, 181, 195, 1);
    font-family: "Poppins";
    font-weight: 500;
    position: absolute;
    left: 390px;
  }

  .count {
    position: absolute;
    left: 1152px;
  }
`;

function List({ users, increaseCount }) {
  const ChangeCount = (userId) => {
    increaseCount(userId);
  };

  return (
    <>
      {users.map((user) => (
        <UserContainer key={user.id}>
          <p>{user.name}</p>
          <span>{user.excuse}</span>
          <p className="count">{user.count}</p>
          <button onClick={() => ChangeCount(user.id)}>Increase</button>
        </UserContainer>
      ))}
    </>
  );
}

export default List;

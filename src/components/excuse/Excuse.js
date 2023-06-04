import React from "react";
import styled from "styled-components";

const ExcuseContainer = styled.div`
  width: 1353px;
  height: 43px;
  background-color: rgba(243, 246, 249, 1);
  display: flex;
  border-radius: 6px;
  margin-top: 24px;
  margin-left: 24px;

  p {
    font-size: 12px;
    font-family: "Poppins";
    font-weight: 600;
    color: rgba(70, 78, 95, 1);
    margin-left: 30px;
  }

  .excuse {
    font-size: 12px;
    font-family: "Poppins";
    font-weight: 600;
    color: rgba(181, 181, 195, 1);
    margin-left: 359px;
  }

  .count {
    font-size: 12px;
    font-family: "Poppins";
    font-weight: 600;
    color: rgba(181, 181, 195, 1);
    margin-left: 700px;
  }
`;

function Excuse() {
  return (
    <>
      <ExcuseContainer>
        <p>Name</p>
        <p className="excuse">Excuse</p>
        <p className="count">Count</p>
      </ExcuseContainer>
    </>
  );
}

export default Excuse;

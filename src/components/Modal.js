import React from "react";
import styled from "styled-components";

export default function Modal({ win, score, setScore, setModal }) {
  return (
    <StyledModal>
      <h1>
        {win === "Durrang !"
          ? "Durrang !"
          : win === "X"
            ? "First Player Win !"
            : "Second Player Win !"}
      </h1>
      <div className="score__wrapper">
        <h2>Score</h2>
        <table border="1px solid #000">
          <thead>
            <tr>
              <th>First Player</th>
              <th>Second Player</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{score.firstPlayer}</td>
              <td>{score.secondPlayer}</td>
            </tr>
          </tbody>
        </table>
        <div className="btn__wrapper">
          <button
            type="button"
            onClick={() =>
              setScore({
                firstPlayer: 0,
                secondPlayer: 0,
              })
            }
          >
            Reset Score
          </button>
          <button type="button" onClick={() => setModal(false)}>
            Play Again
          </button>
        </div>
      </div>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  padding: 20px 16px;
  position: fixed;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 35%);
  width: 400px;
  height: 300px;
  box-shadow: 5px 5px 10px 5px #e2e2e25c;
  background-color: #e6e6e6;
  border-radius: 30px;

  h1 {
    margin: 0 auto !important;
    font-size: 2.3rem !important;
  }

  .score__wrapper {
    h2 {
      margin: 10px 0;
      text-align: center;
      font-size: 1.5rem;
    }

    table {
      margin: 0 auto;
      border: none;

      thead {
        th {
          padding: 10px;
          text-align: center;
        }
      }

      tbody {
        td {
          padding: 8px;
          text-align: center;
          font-size: 1.3rem;
        }
      }
    }

    .btn__wrapper {
      margin-top: 32px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      button {
        cursor: pointer;
        padding: 15px 25px;
        color: #004074;
        font-weight: 700;
        border: 2px solid #004074;
        background-color: #fff0;
        border-radius: 255px 15px 255px 15px / 15px 255px 15px 255px;
        transition: 0.3s;

        &:hover {
          background-color: #004074;
          color: #fff;
        }

        &:active {
          transform: translateY(3px);
        }
      }
    }
  }
`;

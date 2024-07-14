import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Modal from "./components/Modal";
import BackFon from "./components/BackFon";

export function XsOs() {
  const [arr, setArr] = useState(new Array(9).fill(""));
  const [isX, setIsX] = useState(true);

  // Modal opening state
  const [modal, setModal] = useState(false);

  // Game score
  const [score, setScore] = useState({
    firstPlayer: 0,
    secondPlayer: 0,
  });

  useEffect(() => {
    calcResult(arr);
  }, [arr]);

  // Clicked function
  function click(index) {
    if (arr[index]) return;
    let n = isX ? "X" : "O";
    let tempArr = arr.map((i, idx) => {
      return index === idx ? n : i;
    });

    setArr(tempArr);
    setIsX((p) => !p);
  }

  // Score add function
  function scoreAdd(list) {
    list === "Durrang !"
      ? setScore((p) => ({
        ...p,
        firstPlayer: score.firstPlayer + 1,
        secondPlayer: score.secondPlayer + 1,
      }))
      : list === "X"
        ? setScore((p) => ({ ...p, firstPlayer: score.firstPlayer + 1 }))
        : setScore((p) => ({ ...p, secondPlayer: score.secondPlayer + 1 }));
  }

  // Score calc Result
  function calcResult(list) {
    if (list[0] !== "" && list[0] === list[1] && list[1] === list[2]) {
      setModal(list[0]);
      scoreAdd(list[0]);
      resetGame();
      return;
    }
    if (list[0] !== "" && list[0] === list[3] && list[3] === list[6]) {
      setModal(list[0]);
      scoreAdd(list[0]);
      resetGame();
      return;
    }
    if (list[0] !== "" && list[0] === list[4] && list[4] === list[8]) {
      setModal(list[0]);
      scoreAdd(list[0]);
      resetGame();
      return;
    }
    if (list[1] !== "" && list[1] === list[4] && list[4] === list[7]) {
      setModal(list[1]);
      scoreAdd(list[1]);
      resetGame();
      return;
    }
    if (list[2] !== "" && list[2] === list[5] && list[5] === list[8]) {
      setModal(list[2]);
      scoreAdd(list[2]);
      resetGame();
      return;
    }
    if (list[2] !== "" && list[2] === list[4] && list[4] === list[6]) {
      setModal(list[2]);
      scoreAdd(list[2]);
      resetGame();
      return;
    }
    if (list[3] !== "" && list[3] === list[4] && list[4] === list[5]) {
      setModal(list[3]);
      scoreAdd(list[3]);
      resetGame();
      return;
    }
    if (list[6] !== "" && list[6] === list[7] && list[7] === list[8]) {
      setModal(list[6]);
      scoreAdd(list[6]);
      resetGame();
      return;
    }
    if (arr.filter((i) => i).length === 9) {
      setModal("Durrang !");
      scoreAdd("Durrang !");
      resetGame();
    }
  }

  // Reset game
  function resetGame() {
    setArr(new Array(9).fill(""));
    setIsX(true);
  }

  return (
    <StyledXsOs>
      {modal ? (
        <>
          <BackFon />
          <Modal
            win={modal}
            setModal={setModal}
            score={score}
            setScore={setScore}
          />
        </>
      ) : null}
      <h1>X vs Nolik</h1>
      <div className="wrapper">
        {arr.map((i, idx) => {
          return (
            <div key={idx} id={idx} onClick={() => click(idx)}>
              <p>{i}</p>
            </div>
          );
        })}
      </div>
      <footer>
        <h4>
          Created by <br /> Shomaqsudov Jasurbek
        </h4>
        <a href="https://github.com/Jasurbek2208">
          <h5>View My Github</h5>
        </a>
      </footer>
    </StyledXsOs>
  );
}

const StyledXsOs = styled.div`
  height: 100%;
  font-family: 'Kalam', cursive;

  /* Disable the blue clicking effect */
  button:focus,
  button:active,
  a:focus,
  a:active,
  div {
    -webkit-tap-highlight-color: transparent;
  }

  h1 {
    width: max-content;
    margin: 30px auto 50px;
    color: #004074;
    font-size: 3rem;
    text-shadow: 3px 3px 5px #2fbd22;
  }

  .wrapper {
    width: max-content;
    margin: 0 auto;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
      margin: 0;
      width: 90px;
      height: 90px;
      display: grid;
      place-items: center;
      border: 3px solid #361680;

      &:nth-of-type(1) {
        border-top: none;
        border-left: none;
      }
      &:nth-of-type(2) {
        border-top: none;
        border-right: none;
        border-left: none;
      }
      &:nth-of-type(3) {
        border-top: none;
        border-right: none;
      }
      &:nth-of-type(4) {
        border-left: none;
      }
      &:nth-of-type(5) {
        border: none;
      }
      &:nth-of-type(6) {
        border-right: none;
      }
      &:nth-of-type(7) {
        border-bottom: none;
        border-left: none;
      }
      &:nth-of-type(8) {
        border-bottom: none;
        border-right: none;
        border-left: none;
      }
      &:nth-of-type(9) {
        border-bottom: none;
        border-right: none;
      }

      p {
        margin: 12px 0 0;
        font-size: 2.5rem;
        font-weight: 800;
        color: #2fbd22;
      }
    }
  }

  footer {
    padding: 70px 0 20px;
    margin: 0 auto;
    max-width: 400px;

    h4 {
      margin: 0 auto;
      width: max-content;
      text-align: center;
      font-size: 1.2rem;
      line-height: 25px;
    }

    a {
      color: #004074;
      text-decoration: none;

      h5 {
        margin: 20px 0 0;
        cursor: pointer;
        padding: 16px;
        text-align: center;
        font-size: 1.2rem;
        border: 2px solid #004074;
        border-radius: 255px 15px 255px 15px / 15px 255px 15px 255px;
        transition: 0.3s;

        &:hover {
          color: #fff;
          background-color: #004074;
        }
      }
    }
  }
`;

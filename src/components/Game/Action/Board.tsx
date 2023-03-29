import { useState } from "react";
import CellContainer from "./CellContainer";
import End from "@/components/Game/End/End";

const Board = () => {
  const [activePlayer, setActivePlayer] = useState("");

  //PLAY FUNCTIONS
  const changeActivePlayer = (value) => {
    setActivePlayer(value);
    console.log(value);
  };
  return (
    <>
      <End />
      <CellContainer
        activePlayer={activePlayer}
        activePlayerChangeHandler={changeActivePlayer}
      />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
    </>
  );
};

export default Board;

import { Cell } from "@/styled/Button";
import Icons from "../../../../public/Icons";
import { useState } from "react";

const CellContainer = (props: any) => {
  const activePlayer = props.activePlayer;

  const changePlayerHandler = () => {};

  const cellClickHandler = (value: any) => {
    let player;
    if (!value) {
      if (activePlayer === "") player = "1";
      if (activePlayer === "zero") player = "1";
      if (activePlayer === "1") player = "0";
    }

    // props.activePlayerChangeHandler();
    console.log(props.activePlayer);
  };

  return (
    <Cell
      onClick={cellClickHandler.bind(null, activePlayer)}
      className="cursor-pointer"
    >
      {activePlayer && (
        <Icons
          icon={activePlayer === "1" ? "x" : "0"}
          className="absolute"
          iconClassName="w-10 h-10 md:w-[64px] md:h-[64px]"
        />
      )}
    </Cell>
  );
};

export default CellContainer;

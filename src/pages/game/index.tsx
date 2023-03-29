import Icons from "../../../public/Icons";
import { RootState } from "@/store/store";
import { InfoButton } from "@/styled/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import Board from "./Board";

const Action = () => {
  const mode = useSelector((state: RootState) => state.game.mode);
  const mainPlayer = useSelector((state: RootState) => state.game.mainPlayer);

  const p1 = useSelector((state: RootState) => state.game.p1);
  const p2 = useSelector((state: RootState) => state.game.p2);
  const CPU = useSelector((state: RootState) => state.game.cpu);
  const tie = useSelector((state: RootState) => state.game.tie);

  const [reset, setReset] = useState(false);
  const [activePlayer, setActivePlayer] = useState("x");
  const resetGameHandler = () => {
    setReset(true);
  };

  const unresetHandler = () => {
    setReset(false);
  };

  const changeActivePlayerHandler = (val: string) => {
    if (val === "") {
      return setActivePlayer("x");
    }
    setActivePlayer(val === "x" ? "0" : "x");
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="flex justify-center items-center gap-[8px]">
          <Icons icon="x" iconClassName="h-[32px] w-[32px]" />
          <Icons icon="0" iconClassName="h-[32px] w-[32px]" />
        </div>
        <div className="flex items-center gap-2 md:gap-[14px] text-silver h-10 md:h-[52px] bg-semi-dark-navy shadow-button-turn rounded-[5px] md:rounded-[10px] px-[15px] md:px-[30px] items-center pb-1 cursor-default">
          <Icons
            icon={activePlayer}
            iconClassName="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
          />
          <span className="uppercase text-[14px] md:text-[16px]">turn</span>
        </div>
        <button
          className="flex items-center justify-center w-10 h-10 md:w-[52px] md:h-[52px] bg-silver rounded-[5px] md:rounded-[10px] shadow-button-round"
          onClick={resetGameHandler}
        >
          <Icons icon="round" iconClassName="w-4 h-4 md:w-[20px] md:h-[20px]" />
        </button>
      </div>

      <div className="flex  flex-wrap h-[328px] md:h-[460px] justify-between gap-5 mb-5">
        <Board
          reset={reset}
          onUnreset={unresetHandler}
          onChangeActivePlayer={changeActivePlayerHandler}
        />
      </div>
      <div className="flex h-[64px] md:[h-72px] justify-between gap-5">
        <InfoButton className="bg-light-blue flex flex-col md:text-[14px] text-[12px]">
          <span className="font-medium">
            {mode === "pvp"
              ? `X (P1)`
              : `${mainPlayer === "x" ? "X (YOU)" : "O (YOU)"}`}
          </span>
          <span className="font-bold md:text-[24px] text-[20px]">{p1}</span>
        </InfoButton>
        <InfoButton className="bg-silver flex flex-col md:text-[14px] text-[12px]">
          <span className="font-medium">TIES</span>
          <span className="font-bold md:text-[24px] text-[20px]">{tie}</span>
        </InfoButton>
        <InfoButton className="bg-light-yellow flex flex-col md:text-[14px] text-[12px]">
          <span className="font-medium">
            {mode === "pvp"
              ? `O (P2)`
              : `${mainPlayer === "0" ? "X (CPU)" : "O (CPU)"}`}
          </span>
          <span className="font-bold md:text-[24px] text-[20px]">
            {mode === "pvp" ? p2 : CPU}
          </span>
        </InfoButton>
      </div>
    </div>
  );
};

export default Action;

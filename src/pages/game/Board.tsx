import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CellContainer from "./CellContainer";
import End from "@/components/Game/End/End";
import { RootState } from "@/store/store";
import { changePlayerScore, resetScores } from "@/features/game";
import Reset from "../../components/Game/Reset/Reset";

const Board = (props: any) => {
  const dispatch = useDispatch();
  const mainPlayer = useSelector((state: RootState) => state.game.mainPlayer);
  const gameMode = useSelector((state: RootState) => state.game.mode);
  const reset = props.reset;
  const [tie, setTie] = useState(false);

  const [activePlayer, setActivePlayer] = useState("");
  const [endGame, setEndGame] = useState(false);

  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [wonPositions, setWonPositions] = useState<number[]>([]);

  // CELL Array
  const defaultCellArr = [
    {
      index: 0,
      value: null,
      bgColor: "",
    },
    {
      index: 1,
      value: null,
      bgColor: "",
    },
    {
      index: 2,
      value: null,
      bgColor: "",
    },
    {
      index: 3,
      value: null,
      bgColor: "",
    },
    {
      index: 4,
      value: null,
      bgColor: "",
    },
    {
      index: 5,
      value: null,
      bgColor: "",
    },
    {
      index: 6,
      value: null,
      bgColor: "",
    },
    {
      index: 7,
      value: null,
      bgColor: "",
    },
    {
      index: 8,
      value: null,
      bgColor: "",
    },
  ];
  const [cellArr, setCellArr] = useState<any>(defaultCellArr);

  // GET PATTERS
  const slicedArray = (indexes: Array<number>) => {
    const newArr = cellArr.map((item: any) => {
      return item.value;
    });

    return indexes.map((i) => newArr[i]);
  };

  const cellClickHandler = (index: number) => {
    if (!cellArr[index].value) {
      const newPlayer =
        activePlayer === "0" ? "x" : activePlayer === "" ? "x" : "0";
      setActivePlayer(newPlayer);
      props.onChangeActivePlayer(newPlayer);
      setCellArr((prev: any) => {
        const newArr = [...prev];
        newArr[index].value = newPlayer;
        return newArr;
      });
    }
  };

  // CHECK IF SOMEBODY WON or TIE
  useEffect(() => {
    let winningPositions: number[] = [];

    const isWin = winPositions.some((arr, i) => {
      const positions = slicedArray(arr);

      const allXOrZero = positions.every((w) => {
        const isTrue = w === activePlayer;
        return isTrue;
      });
      if (allXOrZero) {
        winningPositions = arr;
      }
      return allXOrZero;
    });

    if (isWin) {
      winningPositions.map((number) => {
        if (cellArr[number].value === activePlayer && activePlayer === "0") {
          return (cellArr[number].bgColor = "light-yellow");
        }

        if (cellArr[number].value === activePlayer && activePlayer === "x") {
          return (cellArr[number].bgColor = "silver");
        }
      });

      if (gameMode === "pvp") {
        mainPlayer === "x" && activePlayer === "x"
          ? dispatch(changePlayerScore("p1"))
          : dispatch(changePlayerScore("p2"));
      }

      setEndGame(true);
    }

    if (!isWin) {
      const isTie = winPositions.every((arr) => {
        const positions = slicedArray(arr);
        const notNull = positions.every((w) => {
          return w !== null;
        });
        return notNull;
      });
      if (isTie) {
        dispatch(changePlayerScore("tie"));
        setEndGame(true);
        setTie(true);
        setActivePlayer("");
      }
    }
  }, [cellArr]);

  // Reset game
  const resetGameHandler = () => {
    setActivePlayer("");
    setCellArr(defaultCellArr);
    setTie(false);
    setEndGame(false);
    setWonPositions([]);
    props.onChangeActivePlayer("");
    dispatch(resetScores());

    props.onUnreset(false);
  };

  const nextRoundHandler = () => {
    setActivePlayer("");
    setCellArr(defaultCellArr);
    setTie(false);
    setEndGame(false);
    props.onChangeActivePlayer("");
  };

  return (
    <>
      {endGame && (
        <End
          activePlayer={activePlayer}
          tie={tie}
          isReset={reset}
          onNextRound={nextRoundHandler}
        />
      )}
      {reset && (
        <Reset onResetGame={resetGameHandler} onUnreset={props.onUnreset} />
      )}

      {cellArr.map((item: any, index: any) => (
        <CellContainer
          key={index}
          onSendIndex={cellClickHandler}
          item={item}
          activePlayer={activePlayer}
        />
      ))}
    </>
  );
};

export default Board;

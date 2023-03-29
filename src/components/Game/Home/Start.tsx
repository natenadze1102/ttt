import Icons from "../../../../public/Icons";
import { Button } from "@/styled/Button";
import { Heading } from "@/styled/Heading";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { changeGameMode, changeMainPlayer } from "@/features/game";

const Start = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState("x");
  const activeClass = "bg-silver rounded-[10px] h-[54px]";
  const router = useRouter();

  const activeStateChangeHandler = (val: string) => {
    setActive(val);
    dispatch(changeMainPlayer(val));
  };

  const chosenGameModeHandler = (val: string) => {
    router.push("game");
    dispatch(changeGameMode(val));
  };

  return (
    <>
      <div className="mb-8 md:mb-10">
        <div className="flex justify-center items-center gap-[8px] mb-10">
          <Icons icon="x" iconClassName="h-[32px] w-[32px]" />
          <Icons icon="0" iconClassName="h-[32px] w-[32px]" />
        </div>
        <div className="w-full h-[205px] bg-semi-dark-navy shadow-container-navy rounded-2xl">
          <Heading
            as="h2"
            size="XS"
            className="text-silver mb-4 pt-[30px] text-center"
          >
            pick player 1’s mark
          </Heading>

          <div className="h-[72px] bg-dark-navy rounded-[10px] mx-6">
            <div className="flex items-center h-full px-2 mb-4">
              <button
                value="x"
                className={`basis-1/2 flex justify-center items-center ${
                  active === "x" && activeClass
                }`}
                onClick={activeStateChangeHandler.bind(null, "x")}
              >
                <Icons
                  icon="x"
                  iconClassName="h-[32px] w-[32px]"
                  fill={`${active === "x" ? "#1A2A33" : "#A8A8A8"}`}
                />
              </button>
              <button
                className={`basis-1/2 flex justify-center items-center ${
                  active === "0" && activeClass
                }`}
                onClick={activeStateChangeHandler.bind(null, "0")}
              >
                <Icons
                  icon="0"
                  iconClassName="h-[32px] w-[32px]"
                  fill={`${active === "0" ? "#1A2A33" : "#F2B137"}`}
                />
              </button>
            </div>
            <p className="text-silver text-sm text-center font-medium opacity-50">
              REMEMBER : X GOES FIRST
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-5">
        <Button
          color="yellow"
          className="hover:bg-light-yellow-hover"
          onClick={chosenGameModeHandler.bind(null, "cpu")}
        >
          <Heading size="XS">NEW GAME (VS CPU)</Heading>
        </Button>
        <Button
          color="blue"
          className="hover:bg-light-blue-hover"
          onClick={chosenGameModeHandler.bind(null, "pvp")}
        >
          <Heading size="XS">NEW GAME (VS PLAYER)</Heading>
        </Button>
      </div>
    </>
  );
};

export default Start;

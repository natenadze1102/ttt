import Icons from "../../../../public/Icons";
import { Button } from "@/styled/Button";
import { Heading } from "@/styled/Heading";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { resetScores } from "@/features/game";

const End = (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const mainPlayer = useSelector((state: RootState) => state.game.mainPlayer);
  let [isOpen, setIsOpen] = useState(true);
  const activePlayer = props.activePlayer;
  const tie = props.tie;

  const closeGamehandler = () => {
    router.back();
    dispatch(resetScores());
  };

  const nextRoundHandler = () => {
    setIsOpen(false);
    props.onNextRound();
  };

  return (
    <Dialog open={isOpen} onClose={() => null} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-black-50">
        <Dialog.Panel className="w-full rounded bg-semi-dark-navy py-10 md:py-11">
          <div className="flex flex-col justify-center items-center mb-4 font-bold">
            {!tie && (
              <Heading size="XS" className="mb-6 text-silver">
                {mainPlayer === "x" ? "you won!" : "oh no, you lost…"}
              </Heading>
            )}
            <div className="flex gap-6 text-light-yellow mb-[30px] items-center">
              {!tie ? (
                <>
                  <Icons
                    icon={activePlayer}
                    iconClassName="w-[64px] h-[64px]"
                  />
                  <Heading size="L">TAKES THE ROUND</Heading>
                </>
              ) : (
                <Heading size="L">round tied</Heading>
              )}
            </div>
            <div className="flex gap-4">
              <Button
                color="silver"
                className="h-[52px] w-[76px] text-dark-navy shadow-button-round"
                onClick={closeGamehandler}
              >
                quit
              </Button>
              <Button
                color="yellow"
                className="h-[52px] w-[146px] text-dark-navy shadow-button-round"
                onClick={nextRoundHandler}
              >
                next round
              </Button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default End;

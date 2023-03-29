import { useState } from "react";

import { Button } from "@/styled/Button";
import { Heading } from "@/styled/Heading";
import { Dialog } from "@headlessui/react";

const Reset = (props: any) => {
  let [isOpen, setIsOpen] = useState(true);
  const resetGameHandler = () => {
    props.onResetGame();
  };

  const declineHandler = () => {
    setIsOpen(false);
    props.onUnreset();
  };

  return (
    <Dialog open={isOpen} onClose={() => null} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-black-50">
        <Dialog.Panel className="w-full rounded bg-semi-dark-navy py-10 md:py-11">
          <div className="flex flex-col justify-center items-center mb-4 font-bold">
            <div className="flex gap-6 text-light-yellow mb-[30px] items-center">
              <Heading size="L">reset the game?</Heading>
            </div>
            <div className="flex gap-4">
              <Button
                color="silver"
                className="h-[52px] px-4 text-dark-navy shadow-button-round"
                onClick={declineHandler}
              >
                no,cancel
              </Button>
              <Button
                color="yellow"
                className="h-[52px] w-[146px] text-dark-navy shadow-button-round"
                onClick={resetGameHandler}
              >
                yes,restart
              </Button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Reset;

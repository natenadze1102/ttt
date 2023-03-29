import { Cell } from "@/styled/Button";
import Icons from "../../../public/Icons";

const CellContainer = (props: any) => {
  const item = props.item;
  const activePlayer = props.activePlayer;

  console.log(activePlayer);

  const cellClickHandler = () => {
    props.onSendIndex(item.index);
  };

  return (
    <Cell
      className={`cursor-pointer bg-${item.bgColor || "semi-dark-navy "}`}
      onClick={cellClickHandler}
      value={item.value}
      iconPath={`${
        !item.value && `/icons/${activePlayer === "x" ? "o" : "x"}-hover.svg`
      }`}
    >
      <Icons
        icon={item.value}
        className="absolute"
        iconClassName="w-10 h-10 md:w-[64px] md:h-[64px]"
        fill={item.bgColor && "#1A2A33"}
      />
    </Cell>
  );
};

export default CellContainer;

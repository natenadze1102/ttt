import styled from "styled-components";
import myIcon from "../../public/icons/x-hover.svg";

const colors: any = {
  yellow: ["bg-light-yellow", "#CC8B13"],
  blue: ["bg-light-blue", "#118C87"],
  silver: ["bg-silver", "#6B8997"],
};

export const Button = styled.button.attrs((props: any) => ({
  className: `${props.className} ${
    colors[props.color][0]
  } h-[56px] md:h-[67px] hover:${colors[props.color][0]}-hover`,
}))`
  border-radius: 15px;
  transition: background 0.3s;
  text-transform: uppercase;
`;

export const Cell = styled.button.attrs((props: any) => ({
  className: `flex items-center justify-center  shadow-container-navy  grow rounded-[10px] md:rounded-[15px] relative`,
}))`
  flex-basis: calc(33.33% - 20px);

  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background-image: url(${(props) => props.iconPath});
      background-size: cover;
      width: 50%;
      height: 50%;
    }
  }
`;

export const InfoButton = styled.div.attrs((props: any) => ({
  className: `flex items-center justify-center grow rounded-[10px] md:rounded-[15px]`,
}))`
  flex-basis: calc(33.33% - 20px);
`;

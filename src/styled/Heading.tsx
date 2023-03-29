import styled from "styled-components";

const sizes: any = {
  L: ["40px", "2.5px", "50px"],
  M: ["24px", "1.5px", "30px"],
  S: ["20px", "1.25px", "25px"],
  XS: ["16px", "1px", "20px"],
};

export const Heading = styled.div.attrs((props: any) => ({
  className: props.className || "",
  size: props.size,
}))`
  font-size: ${(props) => sizes[props.size][0]};
  letter-spacing: ${(props) => sizes[props.size][1]};
  line-height: ${(props) => sizes[props.size][2]};
  text-transform: uppercase;
`;

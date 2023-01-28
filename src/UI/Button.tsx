import { useRef } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-style: none;

  right: 50px;
  position: absolute;

  right: 50px;

  cursor: pointer;
  @media (max-width: 400px) {
    padding-left: 0px;
  }
`;

interface IArrowProps {
  arrow: "▶" | "◀";
}

function Button({ arrow }: IArrowProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  // 가로 스크롤 버튼 기능 (Carousel)
  return (
    <ButtonWrapper className="Button" ref={btnRef}>
      {arrow}
    </ButtonWrapper>
  );
}

export default Button;

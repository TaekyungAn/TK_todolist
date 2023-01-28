import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: aliceblue;
  height: 100px;
`;

function Header() {
  return <HeaderWrapper className="Header">Header</HeaderWrapper>;
}

export default Header;

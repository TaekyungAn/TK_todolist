import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: aliceblue;
  height: 100px;
`;

function Header() {
  return (
    <HeaderWrapper className="Header">
      <Link to="/">Home</Link>
      <Link to="/editor">글작성하기</Link>
    </HeaderWrapper>
  );
}

export default Header;

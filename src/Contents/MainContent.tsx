import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: lightgreen;
  min-height: 350px;
`;

function Main() {
  return <MainWrapper className="Main">Main</MainWrapper>;
}

export default Main;

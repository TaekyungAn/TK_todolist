import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: aliceblue;
  width: 400px;
  height: 500px;
`;

function Card() {
  return <CardWrapper className="Card">Card</CardWrapper>;
}

export default Card;

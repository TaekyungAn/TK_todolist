import styled from "styled-components";
import Button from "UI/Button";
import Card from "UI/Card";

const CardsWrapper = styled.div`
  background-color: lightcoral;
  min-height: 600px;
  width: 100%;

  padding-left: 100px;
  overflow: hidden;

  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    padding-left: 100px;
  }

  > div {
    background-color: yellow;
    display: grid;
    grid-template-rows: repeat(1, 500px);
    grid-template-columns: repeat(6, 400px);
    column-gap: 30px;
    row-gap: 20px;

    @media (max-width: 2000px) {
      display: grid;
      grid-template-rows: repeat(1, 500px);
      grid-template-columns: repeat(6, 400px);
    }

    @media (max-width: 1500px) {
      width: 500px;
      display: grid;
      grid-template-rows: repeat(1, 500px);
      grid-template-columns: repeat(6, 400px);
    }
  }
`;

function Cards() {
  return (
    <CardsWrapper className="Cards">
      <Button arrow="▶" />
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </CardsWrapper>
  );
}

export default Cards;

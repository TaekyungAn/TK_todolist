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

  @media (max-width: 500px) {
    padding-left: 25px;
  }

  > div {
    background-color: yellow;
    display: grid;
    grid-template-rows: repeat(1, 500px);
    grid-template-columns: repeat(6, 400px);
    column-gap: 30px;
    row-gap: 20px;

    @media (max-width: 500px) {
      align-items: center;
    }
  }
`;

function Cards() {
  return (
    <CardsWrapper className="Cards">
      {/* width가 500보다 클때만 버튼 나타나게 하고싶음 */}
      {true && <Button arrow="▶" />}
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

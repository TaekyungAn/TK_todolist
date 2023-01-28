import styled from "styled-components";
import Sort from "./Sort";

const CardWrapper = styled.div`
  background-color: aliceblue;
  width: 400px;
  height: 500px;

  padding: 40px 30px;
  border-radius: 30px;

  @media (max-width: 500px) {
    background-color: blue;
    width: 350px;
  }
`;

const Title = styled.div`
  margin-bottom: 20px;

  > h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  background-color: aqua;
  height: 330px;
  line-height: 1.5rem;
  .photopile {
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    margin-bottom: 15px;
    background-color: gray;
  }
`;

function Card() {
  return (
    <CardWrapper className="Card">
      <Title>
        <h2>제목을 입력하세요</h2>
        <div>
          <span className="category">
            <Sort category="ToDo" />
          </span>
          <span className="created_date">2023-01-28</span>
        </div>
      </Title>
      <Content>
        <div className="photopile">
          <img src="" />
        </div>
        <div className="content">
          다른 컴포넌트의 스타일을 상속하는 새 컴포넌트를 쉽게 만들려면 styled()
          생성자에 구성하면 됩니다. ``` const Button = styled.button` padding:
          0.25em 1em; border: 2px solid palevioletred; `; const TomatoButton =
        </div>
      </Content>
    </CardWrapper>
  );
}

export default Card;

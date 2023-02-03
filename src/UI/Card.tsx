import { CardStateContext, IData } from "App";
import { useContext } from "react";
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

function Card(data: IData) {
  const dateString = new Date(data.created_date).toLocaleString();
  return (
    <CardWrapper className="Card">
      <Title>
        <h2>{data.title}</h2>
        <div>
          <span className="category">
            <Sort category={data.category} />
          </span>
          <span className="created_date">{dateString}</span>
        </div>
      </Title>
      <Content>
        <div className="photopile">
          <img src="" />
        </div>
        <div className="content">{data.content}</div>
      </Content>
    </CardWrapper>
  );
}

export default Card;

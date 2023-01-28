import styled from "styled-components";

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120%;
  height: 120%;
  border-radius: 10px;
  background-color: green;
  color: white;
`;

interface ISort {
  category: string;
}

function Sort({ category }: ISort) {
  return <SortWrapper className="Sort">{category}</SortWrapper>;
}

export default Sort;

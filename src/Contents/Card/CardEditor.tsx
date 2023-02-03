import { IData } from "App";
import Footer from "Footer/Footer";
import Header from "Header/Header";
import { title } from "process";
import { useContext, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const CardEditorWrapper = styled.div`
  width: 65%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Editor = styled.div`
  min-height: 500px;
  padding: 30px;

  display: flex;
  justify-content: center;

  background-color: yellowgreen;

  > form {
    width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      display: flex;
      width: 100%;
      margin-bottom: 5px;

      > select {
        width: 100px;
        margin-left: 5px;
      }
    }
    input,
    select,
    textarea {
      width: 100%;
    }

    textarea {
      margin-bottom: 5px;
      height: 100%;
    }
  }
`;

function CardEditor() {
  const onChangeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(state);
  };

  const [data, setData] = useState<IData[]>([]);
  const dataId = useRef(0);

  const onCreate = (
    title: string,
    category: string,
    content: string,
    like: boolean
  ): void => {
    const created_date = new Date().getTime();
    const newCard = {
      title,
      category,
      content,
      created_date,
      id: dataId.current,
      like,
    };
    dataId.current++;
    setData([newCard, ...data]);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onCreate(state.title, state.category, state.content, false);
    console.log(data);
  };

  const [state, setState] = useState({
    title: "",
    category: "ToDo",
    content: "",
  });

  return (
    <CardEditorWrapper className="CardEditor">
      <Header />
      <Editor>
        <form>
          <div>
            <input
              type="text"
              onChange={onChangeHandler}
              value={state.title}
              name="title"
            />
            <select onChange={onChangeHandler} name="category">
              <option>ToDo</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
            <input type="file" />
          </div>
          <textarea
            onChange={onChangeHandler}
            value={state.content}
            name="content"
          />
          <button onClick={handleSubmit}>등록하기</button>
        </form>
      </Editor>
      <Footer />
    </CardEditorWrapper>
  );
}

export default CardEditor;

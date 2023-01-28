import styled from "styled-components";

const CardContentsWrapper = styled.div``;
const data = [
  {
    id: 1,
    title: "코딩 하는날",
    content: `The visual viewport of this scroll container will rest on a snap point if it isn't currently scrolled. That means it snaps on that point when the scroll action finished, if possible. If content is added, moved, deleted or resized the scroll offset will be adjusted to maintain the resting on that snap point.`,
    like: false,
    created_date: new Date().getTime(),
    category: "ToDo",
  },
  {
    id: 2,
    title: "오늘의 기분은?",
    content: `The scroll container snaps to snap positions in both of its axes independently (potentially snapping to different elements in each axis).`,
    like: false,
    created_date: new Date().getTime(),
    category: "Daliy",
  },
  {
    id: 3,
    title: "뜨개질 하고싶다다",
    content: `When the visual viewport of this scroll container is scrolled, it must ignore snap points.`,
    like: false,
    created_date: new Date().getTime(),
    category: "ToDo",
  },
  {
    id: 4,
    title: "면접 있음",
    content: `The visual viewport of this scroll container will rest on a snap point if it isn't currently scrolled. That means it snaps on that point when the scroll action finished, if possible. If content is added, moved, deleted or resized the scroll offset will be adjusted to maintain the resting on that snap point.`,
    like: false,
    created_date: new Date().getTime(),
    category: "Schedule",
  },
  {
    id: 5,
    title: "코딩 하는날",
    content: `The visual viewport of this scroll container will rest on a snap point if it isn't currently scrolled. That means it snaps on that point when the scroll action finished, if possible. If content is added, moved, deleted or resized the scroll offset will be adjusted to maintain the resting on that snap point.`,
    like: false,
    created_date: new Date().getTime(),
    category: "Hobby",
  },
  {
    id: 6,
    title: "코딩 하는날",
    content: `The visual viewport of this scroll container will rest on a snap point if it isn't currently scrolled. That means it snaps on that point when the scroll action finished, if possible. If content is added, moved, deleted or resized the scroll offset will be adjusted to maintain the resting on that snap point.`,
    like: false,
    created_date: new Date().getTime(),
    category: "ToDo",
  },
];
interface IData {
  id: number;
  title: string;
  content: string;
  like: false;
  created_date: number;
  category: "ToDo" | "Daily" | "Hobby";
}
function CardContents() {
  return <CardContentsWrapper className="CardContents"></CardContentsWrapper>;
}

export default CardContents;

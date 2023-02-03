import App from "App";
import CardEditor from "Contents/Card/CardEditor";
import Home from "Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "editor",
        element: <CardEditor />,
      },
    ],
  },
]);

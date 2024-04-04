import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Login,
  Landingpage,
  Dashboard,
  Register,
  Error,
  Homelayout,
  Summary,
  JsCode,
  Para,
  ChatBot,
} from "./pages/index";
import { action as regAction } from "./pages/Register";
import { action as logAction } from "./pages/Login";
import { loader as dashLoader } from "./pages/Dashboard";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landingpage />,
        },
        {
          path: "register",
          element: <Register />,
          action: regAction,
        },
        {
          path: "login",
          element: <Login />,
          action: logAction,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          loader: dashLoader,
          children: [
            {
              path: "summary",
              element: <Summary />,
            },
            {
              path: "jscode",
              element: <JsCode />,
            },
            {
              path: "paragraph",
              element: <Para />,
            },
            {
              path: "chatbot",
              element: <ChatBot />,
            }
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

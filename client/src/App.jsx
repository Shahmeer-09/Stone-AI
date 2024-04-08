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
import { action as summarizeaction } from "./pages/Summary";
import { action as chatAction } from "./pages/ChatBot";
import { action as codeAction } from "./pages/JsCode";
import { action as paraAction } from "./pages/Para";
import { loader as dashLoader } from "./pages/Dashboard";
import { loader as landingLoader } from "./pages/Landingpage";

// import { loader as landingLoader } from "./pages/Landingpage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout />,
      errorElement: <Error />,

      children: [
        {
          index: true,
          loader: landingLoader,
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
              action: summarizeaction,
            },
            {
              path: "jscode",
              element: <JsCode />,
              action: codeAction,
            },
            {
              path: "paragraph",
              element: <Para />,
              action: paraAction,
            },
            {
              path: "chatbot",
              element: <ChatBot />,
              action: chatAction,
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

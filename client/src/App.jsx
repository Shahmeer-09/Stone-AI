import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Login,
  Landingpage,
  Dashboard,
  Register,
  Error,
  Homelayout,
} from "./pages/index";
import { action as regAction } from "./pages/Register";
import { action as logAction } from "./pages/Login";
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
          action: logAction
        },
        {
          path: "dashboard",
          element: <Dashboard/>,
          children:[

          ]
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

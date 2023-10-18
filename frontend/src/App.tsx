import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login";
import Signup from "./pages/signup/page";
import HomePage from "./pages/home/homepage";
import AddProgram from "./pages/home/programmes/add/add_program";
import ViewProgramme from "./pages/home/programmes/[program]/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/home/programmes/add",
    element: <AddProgram />,
  },
  {
    path: "/home/programmes/:id",
    element: <ViewProgramme />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";
import About2 from "../pages/About2";

export let routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About2 />,
  },
  {
    path: "/adduser",
    element: <AddUser />,
  },
]);

const Routes = () => {
  return <div>Routes</div>;
};

export default Routes;

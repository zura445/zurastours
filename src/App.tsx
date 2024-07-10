import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Georgia from "./pages/Georgia";

function Root() {
  return (
    <div className="max-w-[1400px] m-auto mt-6">
      <Header />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tours",
        element: <Tours />,
      },
      {
        path: "georgia",
        element: <Georgia />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

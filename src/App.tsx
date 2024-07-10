import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Tours from "./pages/Tours";
import Georgia from "./pages/Georgia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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

function Root() {
  return (
    <div className="max-w-[1400px] m-auto mt-6">
      <Header />
      <Georgia />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

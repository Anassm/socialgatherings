import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    children: [
      {
        path: "contact",
        element: <Contact />,
        // loader: teamLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

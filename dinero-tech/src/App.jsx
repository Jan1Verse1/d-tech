import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = React.lazy(() => import("./Pages/Home"));

const Contact = React.lazy(() => import("./Pages/Contact"));

// const ContactUs = React.lazy(() => import("./Pages/ContactUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/Contact",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

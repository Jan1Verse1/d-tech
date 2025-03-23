// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./Pages/Home";

// // import FAQs from "../src/Pages/FAQs";
// // import ContactUs from "../src/Pages/ContactUs";
// // import AboutUs from "../src/Pages/AboutUs";
// // import Communal from "../src/Pages/Communal";
// // import Ajoo from "../src/Pages/Ajoo";
// // import Calculator from "./Pages/Calculator";
// // import Score from "../src/Pages/Score";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   // { path: "/contactus", element: <ContactUs /> },
//   // { path: "/about", element: <AboutUs /> },
//   // { path: "/faqs", element: <FAQs /> },
//   // { path: "/communal", element: <Communal /> },
//   // { path: "/ajoo", element: <Ajoo /> },
//   // { path: "/calculator", element: <Calculator /> },
//   // { path: "/score", element: <Score /> },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = React.lazy(() => import("./Pages/Home"));
const WhoWeAre = React.lazy(() => import("./Pages/Who"));
const WhatWeDo = React.lazy(() => import("./Pages/What"));
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
    path: "/WhoWeAre",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <WhoWeAre />
      </Suspense>
    ),
  },
  {
    path: "/WhatWeDo",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <WhatWeDo />
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

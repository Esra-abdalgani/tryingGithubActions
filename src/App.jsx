import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//Prime react
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Landing from "./pages/Home/Landing";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Layout from "./pages/Layout/Layout";
import Services from "./pages/Services/Services";
import Community from "./pages/community/Community";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="service" element={<Services />} />
      <Route path="community" element={<Community />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

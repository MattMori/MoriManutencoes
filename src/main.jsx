import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Presentation from "./views/Home/Presetation";
import Servicos from "./views/serviços/Servicos";
import ContactForm from "./views/ContactForm/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Presentation />,
  },
  {
    path: "/servicos",
    element: <Servicos />,
  },
  {
    path: "/contato",
    element: <ContactForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

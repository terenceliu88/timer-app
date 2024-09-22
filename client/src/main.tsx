import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Session from "./pages/Session.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sessions/:sessionId",
    element: <Session />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

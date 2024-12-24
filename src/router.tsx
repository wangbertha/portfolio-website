import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Extracurricular from "./pages/Extracurricular";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "extracurricular",
        element: <Extracurricular />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

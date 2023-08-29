import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import App from "./App.jsx";
import HomePage from './Components/Page/homePage.jsx';
import AboutPage from './Components/Page/aboutPage.jsx';
import ProjectPage from './Components/Page/projectPage.jsx';


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/project",
        element: <ProjectPage />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

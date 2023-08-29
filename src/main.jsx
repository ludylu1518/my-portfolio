import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from "./App.jsx";
import HomePage from './Components/Page/homePage.jsx';
import AboutPage from './Components/Page/aboutPage.jsx';
import ProjectPage from './Components/Page/projectPage.jsx';


const router = createBrowserRouter([
  {
    path: "/my-portfolio/",
    element: <App />,
    children: [
      {
        path: '/my-portfolio/',
        element: <HomePage />
      },
      {
        path: '/my-portfolio/about',
        element: <AboutPage />
      },
      {
        path: '/my-portfolio/project',
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

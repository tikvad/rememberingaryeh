import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { AddNewPostPage } from "./pages/AddNewPostPage"
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/add-post",
      element: <AddNewPostPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

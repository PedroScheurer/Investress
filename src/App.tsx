import { createBrowserRouter, RouterProvider } from "react-router"
import { Home, Login, Register, Carteira } from "./pages"

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/carteira", element: <Carteira /> },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
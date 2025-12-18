import { createBrowserRouter, RouterProvider } from "react-router"
import { Home, Login, Register, Carteira, Testes, RootLayout, Investimentos } from "./pages"
import { CarteiraHome } from "./components"
import ModalProvider from "./providers/ModalProvider"

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <Home /> },
      {
        path: "carteira", element: <Carteira />, children: [
          { index: true, element: <CarteiraHome /> },
          { path: ":tipo", element: <Investimentos /> }
        ]
      },
      { path: "testes", element: <Testes /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
])

const App = () => {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  )
}

export default App
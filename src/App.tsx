import { createBrowserRouter, RouterProvider } from "react-router"
import { Home, Login, Register, Carteira, Testes, RootLayout } from "./pages"
import { CarteiraHome, Investimentos, TesteDetails, TestesHome } from "./components"
import ModalProvider from "./providers/ModalProvider"
import "./App.css"

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
      {
        path: "testes", element: <Testes />, children: [
          { index: true, element: <TestesHome /> },
          { path: ":tipo", element: <TesteDetails /> }
        ]
      },
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
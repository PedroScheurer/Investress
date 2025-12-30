import { createBrowserRouter, RouterProvider } from "react-router"
import { Home, Login, Register, Carteira, Testes, RootLayout } from "./pages"
import { CarteiraHome, Investimentos, TesteDetails, TestesHome, PrivateRoute } from "./components"
import ModalProvider from "./providers/ModalProvider"
import AuthProvider from "./providers/AuthProvider"
import { loginAction, register } from "./services/authServices"
import { novoInvestimentoAction, investimentoLoader } from "./services/investimentoService"
import "./App.css"

const router = createBrowserRouter([
  {
    path: '/', element:
      // <PrivateRoute>
      <RootLayout />
    // </PrivateRoute>
    , children: [
      { index: true, element: <Home /> },
      {
        path: "carteira", element: <Carteira />, children: [
          {
            index: true, element: <CarteiraHome />,
            action: novoInvestimentoAction, loader: investimentoLoader
          },
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
  { path: "/login", element: <Login />, action: loginAction },
  { path: "/register", element: <Register />, action: register },
])

const App = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
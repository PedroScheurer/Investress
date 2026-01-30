import { createBrowserRouter, RouterProvider } from "react-router"
import { Home, Login, Register, Carteira, Testes, RootLayout } from "./pages"
import { CarteiraHome, Investimentos, TesteDetails, TestesHome, PrivateRoute } from "./components"
import ModalProvider from "./providers/ModalProvider"
import AuthProvider from "./providers/AuthProvider"
import { loginAction, register } from "./services/authServices"
import { novoInvestimentoAction, investimentoLoader, investimentoPorTipoLoader, deleteInvestimento } from "./services/investimentoService"
import "./App.css"
import { novoTesteAction } from "./services/testeService"

const router = createBrowserRouter([
  {
    path: '/', element:
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    , children: [
      // { index: true, element: <Home /> },
      {
        id: "carteira",
        path: "carteira",
        element: <Carteira />,
        action: novoInvestimentoAction,
        loader: investimentoLoader,
        children: [
          {
            index: true, element: <CarteiraHome />,
          },
          {
            path: ":tipo", element: <Investimentos />,
            loader: investimentoPorTipoLoader, children: [
              { path: ":id/deletar", action: deleteInvestimento }
            ]
          },
        ]
      },
      {
        path: "testes", element: <Testes />, children: [
          { index: true, element: <TestesHome /> },
          { path: ":metric", element: <TesteDetails />, action: novoTesteAction }
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
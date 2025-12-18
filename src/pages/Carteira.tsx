import { NovoInvestimento } from "../components"
import { Outlet } from "react-router"

const Carteira = () => {

  return (
    <>
      <Outlet />
      <NovoInvestimento />
    </>
  )
}

export default Carteira
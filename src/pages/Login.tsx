import { useActionData, useNavigation } from "react-router";

import { LoginForm } from "../components"
import logo from "../assets/698ac4ba-50d4-4816-889e-3aae3f02dfe2.png"

const Login = () => {
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
    }}>
      <img src={logo} alt="Logo" style={{ width: '30em' }} />
      <LoginForm data={data} isSubmitting={isSubmitting} />
    </div>
  )
}

export default Login
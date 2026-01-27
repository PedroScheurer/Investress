import { useActionData, useNavigation } from "react-router";

import classes from "../styles/Login-Register.module.css"
import { RegisterForm } from "../components"
import logo from "../assets/698ac4ba-50d4-4816-889e-3aae3f02dfe2.png"

const Register = () => {
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";

  const parsedData = typeof data === 'string' ? JSON.parse(data) : data;

  return (
    <div className={classes.container}>
      <img src={logo} alt="Logo" />
      <RegisterForm data={parsedData} isSubmitting={isSubmitting} />
    </div>
  )
}

export default Register
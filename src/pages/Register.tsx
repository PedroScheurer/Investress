import { useActionData, useNavigation } from "react-router";
import { RegisterForm } from "../components"

const Register = () => {
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
    }}>
      <RegisterForm data={data} isSubmitting={isSubmitting} />
    </div>
  )
}

export default Register
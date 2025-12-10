import { useAuth } from "../hooks/useAuth";

export default function LoginScreen() {
  const { login } = useAuth();

  const submit = async () => {
    const res = await fetch("YOUR_LOGIN_ENDPOINT", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    login(data.token, data.user);
  };

  return (...UI CODE...);
}

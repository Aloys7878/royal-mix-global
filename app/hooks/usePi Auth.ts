import { useState } from "react";

export const usePiAuth = () => {
  const [user, setUser] = useState(null);

  const login = async () => {
    if (!window.Pi) {
      alert("Open this app inside Pi Browser.");
      return;
    }

    const scopes = ["username", "payments"];
    const authResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound);

    setUser(authResult.user);
    return authResult;
  };

  const onIncompletePaymentFound = (payment: any) => {
    console.log("Incomplete payment", payment);
  };

  return { user, login };
};

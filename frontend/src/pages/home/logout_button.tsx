"use client";

import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigation = useNavigate();

  const handle_logout = async () => {
    const result = await fetch("/api/accounts/logout", { method: "GET" });
    navigation("/");
  };

  return (
    <button className="text-button" onClick={() => handle_logout()}>
      Logout
    </button>
  );
}

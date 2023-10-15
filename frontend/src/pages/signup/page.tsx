"use client";

import React from "react";
import { server_url } from "../../utils";
import Background from "../../assets/landing.jpg";

export default function Signup() {
  const [name, set_name] = React.useState<string>("");
  const [username, set_username] = React.useState<string>("");
  const [email, set_email] = React.useState<string>("");
  const [password, set_password] = React.useState<string>("");

  const handle_signup = async () => {
    const response = await fetch(server_url + "/api/accounts/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        name: name,
      }),
    });
  };

  return (
    <main
      className="h-screen w-full flex items-center justify-center bg-[url('/landing.jpg')]"
      style={{
        backgroundImage: `url('${Background}')`,
      }}
    >
      <form
        action=""
        className="flex flex-col w-1/3 gap-4  border p-4 bg-white/75 backdrop-blur-lg rounded-lg shadow-lg"
      >
        <h1 className="font-bold text-xl text-center mb-4">Create Account</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => set_name(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => set_username(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => set_email(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => set_password(e.target.value)}
        />
        <input type="password" placeholder="Confirm Password" />
        <button
          className="primary-button"
          onClick={(e) => {
            e.preventDefault();
            void handle_signup();
          }}
        >
          Login
        </button>
        <a href="/" className="text-button">{`Already have an account?`}</a>
      </form>
    </main>
  );
}

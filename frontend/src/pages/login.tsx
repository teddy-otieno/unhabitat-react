import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Background from "../assets/landing.jpg";
import { server_url } from "../utils";

export default function LoginPage() {
  const [username, set_username] = React.useState<string>("");
  const [password, set_password] = React.useState<string>("");
  const [error_message, set_error_message] = React.useState<string | null>(
    null
  );

  const navigate = useNavigate();
  const handle_login = async () => {
    if (username === "") {
      set_error_message("Fill username");
      return;
    }

    if (password === "") {
      set_error_message("Fill password");
      return;
    }

    const response = await fetch(server_url + "/api/accounts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.status === 200) {
      const body = await response.json();
      console.log(body);

      window.localStorage.setItem("user_id", body.user_id);
      navigate("/home");
      return;
    }

    set_error_message("Invalid username or password");
  };

  return (
    <main
      className={`h-screen w-full grid grid-cols-2 bg-[url('${Background}')]`}
      style={{
        backgroundImage: `url('${Background}')`,
      }}
    >
      <div className="flex flex-col gap-12 items-center justify-center">
        <form
          action=""
          className="flex flex-col w-1/2 gap-4  p-4 bg-white/75 backdrop-blur-lg rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-xl text-center mb-4 primary-color">
            Welcome back
          </h1>
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => set_username(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => set_password(e.target.value)}
          />

          {error_message ? (
            <p className="text-red-300">{error_message}</p>
          ) : null}
          <input
            type="button"
            value={"Login"}
            className="primary-button"
            onClick={(e) => {
              e.preventDefault();
              handle_login();
            }}
          />
          <a
            href="/signup"
            className="text-button"
          >{`Don't have an account?`}</a>
        </form>
      </div>
      <div className="bg-white/70 w-full p-8 backdrop-blur-lg flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-4xl primary-color drop-shadow-lg">
            UN HABITAT
          </h1>
          <p>Programme database</p>
        </div>
        <p>
          The UN Habitat database is a comprehensive and dynamic repository of
          urban and housing-related information maintained by the United Nations
          Human Settlements Programme (UN-Habitat). This database serves as a
          valuable resource for policymakers, researchers, and practitioners
          involved in urban planning, sustainable development, and housing
          initiatives worldwide. The UN Habitat database collects and curates a
          wide range of data, statistics, and reports related to various aspects
          of human settlements, including urbanization trends, population
          demographics, housing conditions, infrastructure development,
          environmental sustainability, and social indicators. It draws from a
          multitude of sources, including national censuses, government reports,
          academic studies, and contributions from member states and partners.
          Through its user-friendly interface and powerful search capabilities,
          the database facilitates access to valuable insights and analysis for
          evidence-based decision-making. It empowers stakeholders to better
          understand the complex challenges facing cities and human settlements,
          as well as identify opportunities for enhancing urban livability,
          inclusivity, and resilience.
        </p>
      </div>
    </main>
  );
}

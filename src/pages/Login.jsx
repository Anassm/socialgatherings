import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  console.log(loginData);

  function handleChange(e) {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Gebruikersnaam</label>
        <input
          type="text"
          placeholder="Gebruikersnaam"
          onChange={handleChange}
          name="username"
          value={loginData.username}
        />
        <label htmlFor="password">Wachtwoord</label>
        <input
          type="password"
          placeholder="Wachtwoord"
          onChange={handleChange}
          name="password"
          value={loginData.password}
        />
        <button>Login</button>
      </form>

      <p>{loginData.username}</p>
      <p>{loginData.password}</p>
    </div>
  );
}

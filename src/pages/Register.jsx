import { useState } from "react";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(registerData);
  }

  return (
    <div>
      <h1>Registreer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Voornaam</label>
        <input
          type="text"
          placeholder="Voornaam"
          onChange={handleChange}
          name="firstName"
          value={registerData.firstName}
        />

        <label htmlFor="lastName">Achternaam</label>
        <input
          type="text"
          placeholder="Achternaam"
          onChange={handleChange}
          name="lastName"
          value={registerData.lastName}
        />

        <label htmlFor="username">Gebruikersnaam</label>
        <input
          type="text"
          placeholder="username"
          onChange={handleChange}
          name="username"
          value={registerData.username}
        />

        <label htmlFor="age">Leeftijd</label>
        <input
          type="number"
          placeholder="...jaar"
          onChange={handleChange}
          name="age"
          value={registerData.age}
        />

        <label htmlFor="gender">Geslacht</label>
        <select
          id="gender"
          value={registerData.gender}
          onChange={handleChange}
          name="gender"
        >
          <option value="male">Man</option>
          <option value="woman">Vrouw</option>
          <option value="other">Anders</option>
        </select>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={registerData.email}
        />

        <label htmlFor="password">Wachtwoord</label>
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={registerData.password}
        />

        <label htmlFor="confirmPassword">Bevestig wachtwoord</label>
        <input
          type="password"
          placeholder="Bevestig wachtwoord"
          onChange={handleChange}
          name="confirmPassword"
          value={registerData.confirmPassword}
        />

        <br />
        <br />

        <button
          disabled={
            registerData.password === registerData.confirmPassword
              ? false
              : true
          }
        >
          Meld aan
        </button>
      </form>
    </div>
  );
}

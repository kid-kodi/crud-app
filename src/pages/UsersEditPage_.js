import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/edit.css";
const UsersEditPage = () => {
  const [message, setMessage] = useState("Message Log");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("les mots de passes ne sont pas identiques.");
    }
    // alert("Vous envoyez des données...");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Creer / Modifier un utilisateur</h1>
        <p className="message">{message}</p>

        <div>
          <label>Nom</label>
          <input
            type="text"
            placeholder="Nom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <span>{firstName}</span>
        </div>

        <div>
          <label>Prenoms</label>
          <input
            type="text"
            placeholder="Prenoms"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <span>{lastName}</span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button>Enregistrer</button>
          <Link to="/users">Annuler</Link>
        </div>
      </form>
    </div>
  );
};

export default UsersEditPage;

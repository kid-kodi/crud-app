import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import "../styles/edit.css";

// And now we can use these
const UsersEditPage = () => {
  // recuperer le ID.
  const userId = useParams().id;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userId) {
      // recuperation d'un utilisateur
      const users = JSON.parse(localStorage.getItem("users"));
      const _user = users.filter((user) => user._id == userId)[0];

      setFirstName(_user.firstName);
      setLastName(_user.lastName);
      setEmail(_user.email);
    }
  }, [userId]);

  // Envoi des données
  const handleSubmit = (e) => {
    e.preventDefault();
    // verification des valeurs des passwords
    const users = JSON.parse(localStorage.getItem("users"));
    if (password === confirmPassword) {
      if (userId) {
        // Mise a d'un utilisateur
        const _users = users.filter((user) => user._id !== parseInt(userId));
        console.log(_users);
        _users.push({
          _id: userId,
          firstName,
          lastName,
          email,
          password,
        });
        localStorage.setItem("users", JSON.stringify(_users));
        setMessage("Mise à effectuée");
      } else {
        // enregistrement du nouvel utilisateur.
        // ajout d'un utilisateur
        users.push({
          _id: users.length + 1,
          firstName,
          lastName,
          email,
          password,
        });
        localStorage.setItem("users", JSON.stringify(users));
        setMessage("Enregistrement effectué");
      }
    } else {
      setMessage("Les mots de passe ne sont pas identiques");
    }
  };

  return (
    <div className="form__Container">
      <h1>Subscribe!</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="firstName">Nom</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="firstName">Prenoms</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="firstName">Adresse email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="firstName">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.targetvalue)}
            required
          />
        </div>
        <div>
          <label for="firstName">Confirme password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.targetvalue)}
            required
          />
        </div>
        <div>
          <Link to="/users">Annuler</Link>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
};

export default UsersEditPage;

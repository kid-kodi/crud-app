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
    <div className="w-4/5 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="my-10">
          <h1 className="text-4xl">Subscribe!</h1>
          <p>{message}</p>
        </div>
        <div className="my-4">
          <label for="firstName">Nom</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border border-gray rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label for="firstName">Prenoms</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border border-gray rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label for="firstName">Adresse email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label for="firstName">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.targetvalue)}
            required
            className="border border-gray rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label for="firstName">Confirme password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.targetvalue)}
            required
            className="border border-gray rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="flex items-center justify-end my-4 space-x-4">
          <button
            className="text-center  bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            type="submit"
          >
            Enregistrer
          </button>
          <Link
            className="bg-gray-400 text-center px-4 py-2 rounded-lg hover:bg-gray-500"
            to="/users"
          >
            Annuler
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UsersEditPage;

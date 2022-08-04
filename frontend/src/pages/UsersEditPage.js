import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/edit.css";

// And now we can use these
const UsersEditPage = () => {
  // recuperer le ID.
  let navigate = useNavigate();
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
      getUser(userId);
    }
  }, [userId]);

  // Envoi des données
  const handleSubmit = (e) => {
    e.preventDefault();
    // verification des valeurs des passwords
    if (password === confirmPassword) {
      if (userId) {
        // Mise a d'un utilisateur
        updateUser(userId);
      } else {
        createUser();
      }
    } else {
      setMessage("Les mots de passe ne sont pas identiques");
    }
  };

  const getUser = async (userId) => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/students/read/" + userId
    );
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
  };

  const createUser = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/students/create/",
      { firstName, lastName }
    );
    if (response) {
      setMessage("Enregistrement effectué");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const updateUser = async (userId) => {
    const response = await axios.put(
      "http://localhost:5000/api/v1/students/update/" + userId,
      { firstName, lastName }
    );
    if (response) {
      setMessage("Mise à effectuée");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
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

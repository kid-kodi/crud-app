import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";

const UsersListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const _users = JSON.parse(localStorage.getItem("users"));
    setUsers(_users);
  };

  const handleDelete = (id) => {
    const _users = users.filter((user) => user._id !== id);
    console.log(_users);
    localStorage.setItem("users", JSON.stringify(_users));
    setUsers(_users);
  };

  return (
    <div>
      <div>
        <h1>Liste des utilisateurs</h1>
        <Link to={`/users/add`}>Créer un utilisateur</Link>
      </div>
      {users && users.length > 0 ? (
        <>
          <table className="table">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Nom / Prenoms</th>
              <th>Actions</th>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <th>
                  <input type="checkbox" />
                </th>
                <th>
                  <Link to={`/users/${user._id}`}>
                    <h3>
                      {user.firstName} {user.lastName}
                    </h3>
                    <p>{user.email}</p>
                  </Link>
                </th>
                <th>
                  <Link to={`/users/edit/${user._id}`}>Modifier</Link>
                  <button onClick={(e) => handleDelete(user._id)}>
                    Supprimer
                  </button>
                </th>
              </tr>
            ))}
          </table>
        </>
      ) : (
        <>Aucuns utilisateus</>
      )}
    </div>
  );
};

export default UsersListPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";

const UsersListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const usersList = [
      {
        _id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
      },
      {
        _id: 2,
        firstName: "Koffi",
        lastName: "Yao",
        email: "koffiy@example.com",
      },
      {
        _id: 3,
        firstName: "Soro",
        lastName: "Aymard",
        email: "soroa@example.com",
      },
    ];

    setUsers(usersList);
  };

  return (
    <div>
      <div>
        <h1>Liste des utilisateurs</h1>
        <Link to={`/users/edit/0`}>Créer un utilisateur</Link>
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

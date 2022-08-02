import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

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
    <div className="min-h-screen">
      <div className="flex items-center justify-between px-4 py-2 border border-b-gray-200">
        <h1 className="text-3xl font-semibold">Liste des utilisateurs</h1>
        <Link
          className="bg-green-700 hover:bg-green-800 transition ease-in focus:outline-none px-4 py-2 rounded-full shadow-sm text-white"
          to={`/users/add`}
        >
          Créer un utilisateur
        </Link>
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
        <div className="text-gray-600 text-center mx-auto mt-[100px] w-[300px] h-[400px] flex flex-col items-center">
          <AiOutlineUser className="w-16 h-16" />
          <p className="text-lg">Aucuns utilisateurs</p>
        </div>
      )}
    </div>
  );
};

export default UsersListPage;

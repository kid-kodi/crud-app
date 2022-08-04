import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";

const UsersListPage = () => {
  let [users, setUsers] = useState([]);
  const [fusers, setFusers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/students/list"
    );
    setUsers(response.data);
    setFusers(response.data);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(
      "http://localhost:5000/api/v1/students/delete/" + id
    );

    if (response) {
      const _users = users.filter((user) => user._id !== id);
      console.log(response);
      localStorage.setItem("users", JSON.stringify(_users));
      setUsers(_users);
      setFusers(_users);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value); //name.includes('J')
    console.log(e.target.value);
    let _users = fusers.filter((user) =>
      user.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(_users);
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
      <input
        type="text"
        placeholder="Recherche"
        className=""
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      {users && users.length > 0 ? (
        <>
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    <input type="checkbox" />
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Nom / Prénoms
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="py-4 px-6">
                      <input type="checkbox" />
                    </td>
                    <td
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Link to={`/users/${user._id}`}>
                        <h3>
                          {user.firstName} {user.lastName}
                        </h3>
                        <p>{user.email}</p>
                      </Link>
                    </td>

                    <td class="py-4 px-6">
                      <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        to={`/users/edit/${user._id}`}
                      >
                        Modifier
                      </Link>
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mx-1"
                        onClick={(e) => handleDelete(user._id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

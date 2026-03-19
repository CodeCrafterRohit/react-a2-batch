import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Users from "./Users.json";

const APIFetchAndSearch = () => {
  let [userData, setUserData] = useState([]);
  let [searchText, setSearchText] = useState("");

  //! API Fetch
  let fetchUsers = async () => {
    let response = await fetch("https://api.github.com/users");
    let data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //! filter out the cards
  let filteredUsers = Users.filter(
    (user) =>
      user.login.includes(searchText.toLowerCase()) ||
      String(user.id).includes(searchText),
  );

  return (
    <section className="w-full min-h-screen bg-indigo-800 flex flex-col items-center justify-center p-5">
      <header className="w-[80%] h-[10vh] bg-white rounded-full shadow flex justify-between px-10">
        <aside className="w-[20%] h-full flex items-center justify-center">
          <span className="text-xl font-semibold text-indigo-600">Fetch</span>
          <span className="text-xl font-semibold text-indigo-600">Search</span>
          <span className="text-xl font-semibold">Task</span>
        </aside>
        <aside className="w-[30%] h-full flex items-center justify-center relative">
          <input
            type="text"
            name="searchText"
            id="searchText"
            className="border p-2 rounded-full w-80 outline-none focus:ring-1 focus:ring-indigo-700 transition pl-11 placeholder:text-gray-700"
            placeholder="Search by username or id"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="absolute top-6 left-6 text-2xl">
            <CiSearch />
          </span>
        </aside>
      </header>
      <main className="w-full mt-6 flex flex-wrap gap-2 items-center justify-evenly">
        {filteredUsers.map((user) => {
          return (
            <div
              key={user.id}
              className="w-[20%] h-70 rounded-md bg-white shadow-xl hover:scale-105 transition-all duration-150 ease-linear mb-3 flex flex-col justify-center items-center gap-2"
            >
              <img
                src={`${user.avatar_url}`}
                alt={`${user.login}`}
                className="w-30 h-30 rounded-full border-3 object-cover border-indigo-600"
              />
              <p className="text-lg text-gray-700">id: {user.id}</p>
              <h1 className="text-lg text-indigo-600 font-semibold">
                {user.login}
              </h1>
              <a
                href={`${user.html_url}`}
                target="_blank"
                className="p-2 text-white bg-indigo-600 hover:bg-indigo-500 cursor-pointer rounded"
              >
                View Profile
              </a>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default APIFetchAndSearch;

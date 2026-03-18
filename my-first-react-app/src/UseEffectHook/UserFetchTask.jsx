import React, { useEffect, useState } from "react";

const UserFetchTask = () => {
  let [usersData, setUsersData] = useState([]);

  let fetchUsers = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.log("Error while fetching the data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="w-full h-screen flex flex-col items-center gap-2">
      <h1 className="text-3xl font-semibold underline text-blue-600 p-3">
        Users Data
      </h1>
      <main className="w-[95%] h-[80%]  flex flex-wrap justify-evenly gap-2 items-center shadow">
        {usersData.map((user) => {
          return (
            <div
              key={user.id}
              className="flex flex-col  shadow-xl w-[19%] p-5 rounded bg-amber-400 text-gray-800"
            >
              <h1 className="text-lg text-black font-semibold">{user.name}</h1>
              <h2 className="flex gap-2">
                <span>@</span>
                <span className="text-black">{user.username}</span>
              </h2>
              <p className="flex gap-1">
                <span>✉️</span>
                {user.email}
              </p>
              <p className="flex gap-1">
                <span>📍</span>
                {user.address.street}
              </p>
              <p className="flex gap-1">
                <span className="text-black underline">Pincode:</span>{" "}
                {user.address.zipcode}
              </p>
              <p>🌐{user.website}</p>
              <p>📞:{user.phone}</p>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default UserFetchTask;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  let navigate = useNavigate();

  let [userData, setUserData] = useState([]);
  //   console.log(userData.users);
  console.log(userData);

  let fetchUsers = async () => {
    let response = await fetch("https://api.github.com/users");
    let data = await response.json();
    // console.log("data", data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [userData.id]);

  //! handleUserDetails
  let handleUserDetails = (user) => {
    navigate(`/user-details/${user.login}/${user.id}`, {
      state: user,
    });
  };
  return (
    <section>
      <h1 className="text-3xl text-center font-semibold m-3">Users List</h1>
      <main className="w-full flex flex-wrap justify-evenly gap-5">
        {userData.map((user) => {
          return (
            <div
              key={user.id}
              className="w-[18%] h-62.5 bg-white p-5 rounded shadow-lg flex flex-col justify-center items-center gap-5"
            >
              <div className="w-[80%] h-[80%] flex justify-center items-center ">
                <img
                  src={`${user.avatar_url}`}
                  alt={`${user.login}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <button
                onClick={() => handleUserDetails(user)}
                className="py-2 px-6 bg-rose-600 text-white hover:bg-rose-700 cursor-pointer rounded"
              >
                Visit For More Details
              </button>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default DashBoard;

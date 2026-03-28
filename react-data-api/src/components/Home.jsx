import React, { useEffect, useState } from "react";
import { getUsers } from "../api/axiosInstance";

const Home = () => {
  let [userData, setUserData] = useState([]);
  console.log("userData:", userData);

  let fetchAllUsers = async () => {
    let response = await getUsers();
    // console.log(response);
    // console.log(response.data);
    setUserData(response.data);
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
          Users List
        </h1>

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {userData.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-indigo-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-1 text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-50 rounded-md mb-3">
                ID: {user.id}
              </span>

              <h2 className="text-lg font-semibold text-slate-800 leading-tight">
                {user.firstName} {user.lastName}
              </h2>

              <p
                className="mt-2 text-sm text-indigo-500 truncate"
                title={user.email}
              >
                {user.email}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-50">
                <button className="text-xs font-medium text-indigo-700 hover:underline">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;

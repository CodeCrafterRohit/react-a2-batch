import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserDetails = () => {
  let navigate = useNavigate();
  const { state } = useLocation();

  // Defensive check in case someone navigates here without state
  if (!state) {
    return (
      <div className="text-center mt-10 text-red-500">No user data found.</div>
    );
  }

  let goBackMain = () => {
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
        {state.login}’s Profile
      </h1>

      <main className="flex flex-col md:flex-row gap-8 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <aside className="md:w-1/3 bg-gray-50 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-48 h-48 md:w-full md:h-64 overflow-hidden rounded-xl shadow-md">
            <img
              src={state.avatar_url}
              alt={`${state.login}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500 font-mono uppercase tracking-widest">
            ID: {state.id}
          </p>
        </aside>

        <article className="md:w-2/3 p-8">
          <section className="mb-6">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide">
              Personal Information
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <label className="block text-xs text-gray-400 uppercase">
                  First Name
                </label>
                <p className="text-xl font-medium text-gray-800">
                  {state.login}
                </p>
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase">
                  Type
                </label>
                <p className="text-xl font-medium text-gray-800">
                  {state.type}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide">
              GitHub URL
            </h2>
            <a
              href={`${state.html_url}`}
              title="Visit Github"
              target="_blank"
              className="mt-2 text-xl font-medium text-gray-800 hover:text-blue-600"
            >
              {state.html_url}
            </a>
          </section>

          <div className="mt-3">
            <button
              onClick={goBackMain}
              className="py-2 px-10 bg-red-400 rounded cursor-pointer text-white my-2"
            >
              Go back
            </button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default UserDetails;

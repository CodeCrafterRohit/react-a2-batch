import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const UserDetails = () => {
  let location = useLocation();
  let { user } = location.state;

  let firstLetter1 = user.firstName[0];
  let firstLetter2 = user.lastName[0];

  return (
    <div className="bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-50">
        <div className="bg-indigo-900 p-6">
          <h1 className="text-2xl font-bold text-white uppercase tracking-wide">
            {user.firstName} Details
          </h1>
        </div>

        <main className="p-8">
          <div className="flex flex-col md:flex-row gap-12">
            <aside className="flex flex-col items-center space-y-4 md:w-1/3 border-b md:border-b-0 md:border-r border-indigo-50 pb-8 md:pb-0 md:pr-8">
              <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg ring-4 ring-indigo-50">
                {firstLetter1 + firstLetter2}
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase">
                ID: {user.id}
              </span>
            </aside>

            <article className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold text-indigo-400 uppercase">
                  First Name
                </label>
                <p className="text-lg font-medium text-slate-800">
                  {user.firstName}
                </p>
              </div>
              <div>
                <label className="text-xs font-semibold text-indigo-400 uppercase">
                  Last Name
                </label>
                <p className="text-lg font-medium text-slate-800">
                  {user.lastName}
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-indigo-400 uppercase">
                  Email Address
                </label>
                <p className="text-lg font-medium text-slate-800">
                  {user.email}
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-indigo-400 uppercase">
                  Password
                </label>
                <p className="text-lg font-medium text-slate-800 font-mono">
                  ********
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-8">
            <NavLink
              to={"/"}
              className="flex-1 text-center px-6 py-3 border border-indigo-200 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Go Back
            </NavLink>
            <NavLink
              to={"/user-form"}
              state={{ user }}
              className="flex-1 text-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 shadow-md transition-all"
            >
              Update User
            </NavLink>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDetails;

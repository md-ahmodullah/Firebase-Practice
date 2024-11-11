import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../Utility/LoginContext";

export default function Navbar() {
  const { profile } = useContext(LoginContext);
  return (
    <section className="">
      <div className="navbar bg-base-100 w-11/12 md:w-10/12 mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/login">Login</NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Firebase
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {profile ? (
            <div className="flex items-center gap-2">
              <div className="border-2 border-indigo-700 rounded-full p-0.5 w-8">
                <img
                  src={profile.photoURL}
                  alt={profile.displayName}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold">{profile.displayName}</h2>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-md btn-primary">
              Sign Up
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
}

import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import LoginPage from "../Components/LoginPage";
import { LoginContext } from "../Utility/LoginContext";

export default function Login() {
  const { profile, handleSignInGoogle, signOut, handleSignInGithub } =
    useContext(LoginContext);

  const handleLogIn = () => {
    handleSignInGoogle();
  };
  const handleSignOut = () => {
    signOut();
  };
  const handleGithub = () => {
    handleSignInGithub();
  };

  return (
    <>
      {profile ? (
        <div className="text-center">
          <button
            className="btn btn-md btn-outline btn-error text-base lg:text-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
      {profile ? (
        <LoginPage />
      ) : (
        <div className="hero bg-base-200 my-12">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="flex w-full flex-col border-opacity-50 form-control mt-3">
                  <button
                    className="btn btn-outline mb-3 text-indigo-500"
                    onClick={handleLogIn}
                  >
                    <FaGoogle /> Sign In with Google
                  </button>
                  <button
                    className="btn btn-outline mb-3 text-green-500"
                    onClick={handleGithub}
                  >
                    <FaGithub /> Sign In with Github
                  </button>
                  <div className="divider">OR</div>
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

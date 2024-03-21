import { useState } from 'react';
import { useAuth } from './AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import "./../App.css";

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [err, setErr] = useState<string | null>(null); // Ensure `err` is typed to store a string or null
  const from = location.state?.from?.pathname || '/';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    auth
      .signIn(user)
      .then(() => navigate(from, { replace: true }))
      .catch((err: unknown) => { // Catch block now correctly handles `err` of type `unknown`
        if (err instanceof Error) {
          setErr(err.message); // Safe to access `message` because we've checked `err` is an Error
        } else {
          // Handle non-Error objects, could log or set a generic error message
          setErr('An error occurred, please try again.');
        }
      });
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Employee login</h1>
          <p className="py-6">
            This is for employees only, Please dont try to login in, or i will lose it
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body bg-custom-txt-colour rounded-xl" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-custom-bg-colour">Username</span>
              </label>
              <input 
                type="text" 
                name="username" 
                value={user.username}
                onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
                className="input input-bordered" 
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-custom-bg-colour">Password</span>
              </label>
              <input 
                type="password" 
                name="password" 
                value={user.password}
                onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                className="input input-bordered" 
                required 
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6 ">
              <button type="submit" className="btn bg-custom-btn-colour text-custom-txt-colour">Login</button>
            </div>
            {err && <div className="form-control mt-4">
              <div className="alert alert-error">
                {err} 
              </div>
            </div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

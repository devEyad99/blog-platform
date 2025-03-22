// src/pages/Login.tsx
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actAuthLogin } from "../store/Auth/authSlice";
import PageLayout from "../layouts/Pagelayout/Pagelayout";
import Input from "../components/Input/Input";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, token, user } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(actAuthLogin({ email, password }));
  };

  if (token && user) {
    return <Navigate to="/posts" />;
  }

  return (
    <PageLayout title="Sign In">
      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <Input label="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Input label="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        <button
          disabled={loading === "pending"}
          type="submit"
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading === "pending" ? "Logging in..." : "Log In"}
        </button>
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </form>
    </PageLayout>
  );
};

export default Login;
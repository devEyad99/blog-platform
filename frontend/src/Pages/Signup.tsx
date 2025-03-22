import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import actAuthSignup from "../store/Auth/act/actSignup";
import PageLayout from "../layouts/Pagelayout/Pagelayout";
import Input from "../components/Input/Input";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(actAuthSignup({ name, email, password }));

    if (actAuthSignup.fulfilled.match(resultAction)) {
      setShowMessage(true);
      setTimeout(() => setRedirectToLogin(true), 2000);
    } else {
      console.error("Signup failed:", resultAction.payload || resultAction.error);
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <PageLayout title="Sign Up">
      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <Input label="Name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <Input label="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Input label="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading === "pending" ? "Signing up..." : "Sign Up"}
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-2">{String(error)}</p>
        )}
      </form>

      {showMessage && (
        <div className="mt-6 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <strong>Success!</strong> Redirecting to login...
        </div>
      )}
    </PageLayout>
  );
};

export default SignUp;

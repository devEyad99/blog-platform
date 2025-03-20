// Signup.tsx
import { useState } from "react";
import { Navigate } from "react-router-dom";
import PageLayout from "../layouts/Pagelayout/Pagelayout";
import Input from "../components/Input/Input";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <PageLayout title="Sign Up">
      <form className="mt-12 space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <Input label="Name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <Input label="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Input label="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        {/* <Input label="Role" type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter role" /> */}
        <button type="submit" className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
          Sign Up
        </button>
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

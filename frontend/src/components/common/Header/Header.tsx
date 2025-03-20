
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import { actLogout } from "../../../store/Auth/authSlice";
import Swal from "sweetalert2";
// import Searchbar from "../Searchbar/Searchbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { token } = useAppSelector((state) => state.auth);
  // const dispatch = useAppDispatch();

  // const handleLogout = () => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You will be logged out!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, log out!',
  //     confirmButtonColor: "#0A66C2", // First button color
  //     cancelButtonText: 'Cancel',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       dispatch(actLogout()); // Dispatch logout action
  
  //       Swal.fire({
  //         title: 'Logged out!',
  //         text: 'You have been logged out successfully.',
  //         icon: 'success',
  //         confirmButtonText: 'OK',
  //         confirmButtonColor: "#0A66C2", // Second button color
  //       });
  //     }
  //   });
  // };
  

  return (
    <header className="bg-primaryBlue text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">Blogging Platform</h1>
       {/* !token */}
        { true ? (
          <div className="flex space-x-4 order-2 lg:order-none">
            <NavLink to="/login" className="hover:text-gray-300">
              Login
            </NavLink>
            <NavLink to="/signup" className="hover:text-gray-300">
              Signup
            </NavLink>
          </div>
        ) : (
          <>
            <button
              className="block lg:hidden order-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-2xl">&#9776;</span>
            </button>

            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } w-full lg:flex lg:w-auto lg:static bg-primaryBlue mt-4 lg:mt-0`}
            >
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
                <NavLink to="/" className={({ isActive }) =>
                  isActive
                    ? "text-warningYellow font-semibold hover:text-yellow-400"
                    : "hover:text-gray-300"
                }>
                  Dashboard
                </NavLink>
                <NavLink to="/user-profile" className={({ isActive }) =>
                  isActive
                    ? "text-warningYellow font-semibold hover:text-yellow-400"
                    : "hover:text-gray-300"
                }>
                  Profile
                </NavLink>
                <NavLink to="/user-tasks" className={({ isActive }) =>
                  isActive
                    ? "text-warningYellow font-semibold hover:text-yellow-400"
                    : "hover:text-gray-300"
                }>
                  Tasks
                </NavLink>
                <NavLink
                  to="/"
                  // onClick={handleLogout}
                  className="hover:text-gray-300"
                >
                  Logout
                </NavLink>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

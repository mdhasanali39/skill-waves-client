import {  useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState(false);
  const [active, setActive] = useState(false)
  const { user, logOut } = useAuth()

  // handle item click
  const handleItemClick = () => {
    setIsItemClicked(true);
    setMenuActive(false);
  };

  // handle log-out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successful");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // nav links here
  const navLinks = (
    <>
      <li
        onClick={handleItemClick}
        className="text-lg font-semibold text-gray-600"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-action-primary-clr underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li
        onClick={handleItemClick}
        className="text-lg font-semibold text-gray-600"
      >
        <NavLink
          to="/add-job"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-action-primary-clr underline"
              : ""
          }
        >
          Add job
        </NavLink>
      </li>
      <li
        onClick={handleItemClick}
        className="text-lg font-semibold text-gray-600"
      >
        <NavLink
          to="/my-posted-jobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-action-primary-clr underline"
              : ""
          }
        >
          My posted jobs
        </NavLink>
      </li>
      <li
        onClick={handleItemClick}
        className="text-lg font-semibold text-gray-600"
      >
        <NavLink
          to="/my-bids"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-action-primary-clr underline"
              : ""
          }
        >
          My Bids
        </NavLink>
      </li>
      <li
        onClick={handleItemClick}
        className="text-lg font-semibold text-gray-600"
      >
        <NavLink
          to="/bid-requests"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-action-primary-clr underline"
              : ""
          }
        >
          Bid Requests
        </NavLink>
      </li>
      {user ? (
        <li>
          <div className="flex lg:block">
            <div className="relative left-1/2 max-[1023.9px]:-translate-x-1/2">
              <div onClick={() => setActive(!active)}>
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={user.photoURL}
                />
              </div>
              <div
                className={`${
                  active ? "block" : "hidden"
                } absolute max-[1023.9px]:left-1/2 max-[1023.9px]:-translate-x-1/2 max-[1023.9px]:-top-[170px] z-50 lg:right-[5%] min-w-max border border-action-primary-clr bg-white p-4 rounded-md`}
              >
                <div onClick={() => setActive(!active)}>
                  <img
                    className="w-12 h-12 mx-auto object-cover mb-4 rounded-full"
                    src={user.photoURL}
                  />
                </div>
                <h3 className="text-center">{user.displayName}</h3>
                <button
                  onClick={handleLogOut}
                  className="flex gap-1 items-center text-lg text-white font-semibold px-4 py-1 rounded-lg bg-action-primary-clr border hover:bg-white hover:text-action-primary-clr hover:border-action-primary-clr transition ease-linear duration-300"
                >
                  <span>
                    <BiLogOut />
                  </span>
                  Log-out
                </button>
              </div>
            </div>
          </div>
        </li>
      ) : (
        <li>
          <Link to={"/login"}>
            <button
              onClick={handleItemClick}
              className="text-lg font-semibold px-4 py-2 bg-action-primary-clr text-white rounded-md"
            >
              Login
            </button>
          </Link>
        </li>
      )}
    </>
  );

  // handle open menu
  const handleMenuOpen = () => {
    setMenuActive(!menuActive);
    setIsItemClicked(false);
  };
  return (
    <nav
      className={`flex justify-between items-center py-6
      relative `}
    >
      {/* logo  */}
      <div>
        <img
          className=""
          src="https://i.ibb.co/GRCTkJc/waves-1.png"
          alt="skill wave logo"
        />
      </div>

      {/* for small and medium device */}
      <div className="lg:hidden">
        {/* menu open icon  */}
        <span
          onClick={handleMenuOpen}
          className={`${menuActive ? "hidden" : "block"} text-2xl`}
        >
          <FaBars />
        </span>
        {/* menu close icon  */}
        <span
          onClick={() => setMenuActive(!menuActive)}
          className={`${menuActive ? "block" : "hidden"} text-2xl`}
        >
          <AiOutlineClose />
        </span>
      </div>
      <ul
        className={`${
          menuActive
            ? "fixed bg-white border shadow-lg w-1/2 top-[72px]  right-0 text-center space-y-5 pt-16 h-[89.5vh] z-50"
            : "fixed bg-white w-1/2 top-[72px] translate-x-[600px] right-0 text-center space-y-5 pt-16 h-[89.5vh]"
        } ${
          isItemClicked &&
          "fixed bg-white w-1/2 top-[72px] translate-x-[600px] right-0 text-center space-y-5 pt-16 h-[89.5vh]"
        } transition ease-linear duration-300 lg:hidden`}
      >
        {/* nav links  */}
        {navLinks}
        <li className="">
          <div className="w-[30px] h-[30px] absolute -top-[0px] bg-orange-600"></div>
          <div className="w-[30px] h-[30px] absolute bottom-0 -right-[.5px] bg-orange-600"></div>
        </li>
      </ul>
      {/* for large device  */}
      <ul className="hidden lg:flex gap-6 justify-center items-center">
        {navLinks}
      </ul>
    </nav>
  );
};

export default Navbar;

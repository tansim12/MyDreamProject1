import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";
import LoginAndProfile from "../LoginAndProfile/LoginAndProfile";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}

          <div className="w-full navbar  ">
            <div className=" w-full max-w-[1200px] px-[25px] mx-auto navbarBlur ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">Navbar Title</div>
              <div className="flex-none hidden lg:block">
                <div className=" menu menu-horizontal">{links}</div>
              </div>
              <div className="ml-5">
                <LoginAndProfile></LoginAndProfile>
              </div>
            </div>
          </div>

          {/* Page content here */}
          <div>
            <div className="min-h-screen">{<Outlet></Outlet>}</div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-64 sm:w-80 min-h-full bg-base-200 z-50">
            {/* Sidebar content here */}
            {links}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

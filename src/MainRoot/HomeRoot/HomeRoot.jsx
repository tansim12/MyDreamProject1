import { Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar.jsx/Navbar";

const HomeRoot = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeRoot;

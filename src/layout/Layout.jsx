import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from './../components/NavBar'
const Layout = () => {
  const [isVisible, setVisible] = useState(false);

  const visiblefunc = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="mx-5 flex-grow">
      <div className="flex">
      {!isVisible ? <SideBar /> : ""}
      <NavBar visiblefunc={visiblefunc} />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;

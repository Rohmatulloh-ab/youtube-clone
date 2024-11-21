import { useState } from "react";
import Icon from "../assets/icon";
import images from "../assets/images/images";
import PropTypes from "prop-types";


const NavBar = ({ visiblefunc }) => {
  const [searchkey, setSearchkey] = useState("");
 
  const onkeyfunc = (e) => {
    if (e.key === "Enter") {
      searchfunc();
    }
  };
  const searchfunc = () => {
    if (searchkey.length > 0) {
      window.location = `/search/${searchkey}`;
    }
  };

  return (
    <div className="w-full">

    <div className="w-full flex items-center justify-between h-20 px-3">
      <div className="w-3/12 flex items-center space-x-4">
        <Icon.Menu onClick={visiblefunc} className="icon-style h-[50px] w-10" />
        <img
          onClick={() => (window.location = `/`)}
          className="w-[43px] rounded-lg cursor-pointer"
          src={images.youtube}
          alt=""
        />
      </div>
      <div className="w-6/12 flex items-center space-x-4">
        <div className="w-3/4 flex items-center ">
          <input
            onKeyPress={onkeyfunc}
            value={searchkey}
            className=" outline-none border p-2 h-10 flex-1"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchkey(e.target.value)}
          />
          <div
            onClick={searchfunc}
            className="bg-gray-400 h-10 w-20 flex items-center justify-center border"
          >
            <Icon.search className="icon-style" />
          </div>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center cursor-pointer ">
        <Icon.microphone className="icon-style" />
      </div>
      <div className="w-3/12 flex items-center justify-end space-x-3">
        <Icon.video className="icon-style text-2xl" />
        <Icon.notification className="icon-style text-2xl" />

        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
      
    </div>
  );
};
NavBar.propTypes = {
  visiblefunc: PropTypes.func.isRequired, // Add prop types for visiblefunc
};

export default NavBar;

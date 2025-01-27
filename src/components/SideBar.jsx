import dataSide from "../assets/data/dataSide";

const SideBar = () => {
  return (
    <div className=" w-[270px] p-2 space-y-3 border-r h-screen fixed  top-14 left-0">
      {dataSide.map((data, i) => (
        <div
          key={i}
          className="
            w-[270px] flex items-center space-x-5 p-2 hover:bg-gray-200 cursor-pointer"
        >
          <span>{data.icon}</span>
          <span>{data.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

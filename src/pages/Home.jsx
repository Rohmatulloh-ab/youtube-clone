import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import HomeCard from "../components/HomeCard";
import { useEffect, useState } from "react";
import homeAction from "../redux/actions/HomeData";
// import PageContainer from "../container/PageContainer";

const Home = () => {
  const dispatch = useDispatch();
  const { getVideos } = useSelector((state) => state.getVideos);
  const [letter,setLetter]=useState("new")
  useEffect(() => {
    dispatch(homeAction(letter));
  }, [dispatch,letter]);
  return (
    <div className="w-[80%] ml-64">
      <Filter setLetter={setLetter}/>
        <div className="grid grid-cols-4 m-2 w-full h-[400px]">
          {getVideos?.items?.map((video, id) => (
            <HomeCard key={id} video={video} />
          ))}
        </div>
      
    </div>
  );
};

export default Home;

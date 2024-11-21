/* eslint-disable react/prop-types */

import moment from "moment";
import { useNavigate } from "react-router-dom";
const SearchCard = ({searcH}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/videos/${searcH?.id?.videoId}`) } className="flex space-x-2 items-center justify-center m-3 my-10 mx-5 cursor-pointer">
      <img className="h-44 w-72 rounded-lg" src={searcH?.snippet?.thumbnails?.high?.url} alt="" />
      <div className="w-2/3 space-y-2">
      <div className="font-bold text-xl ">
        {searcH?.snippet?.title}
      </div>
      <div className="flex items-center mt-2 space-x-2 text-gray-700">
        <span>{}3.5 ko`rilganlar</span>
        <span>{moment(searcH?.snippet?.channelId).startOf('day').fromNow()}</span>
      </div>
      </div>
      

      <div className="flex items-center space-x-2 text-sm ">
        <div className=" w-10 rounded-full h-10 bg-slate-300 "> </div>
        <div className="text-gray-700"> Shahriston </div>
      </div>
      <div className="text-sm text-gray-700">
       {searcH?.snippet?.description ? searcH?.snippet?.description : 'lskdakslkdlasdjhasdjhakjsdkajhsdkjasdkjkajsdkjahskdjha jsdkajsdkjhalksjdkajdha kjsdkajsdhkja'}
      </div>
    </div>
  );
};


export default SearchCard;

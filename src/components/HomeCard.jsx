// import { useHistory } from 'react-router-dom';
// import ReactPlayer from "react-player";

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCard = ({ video }) => {
  // if (!video || !video.snippet || !video.snippet.title || !video.id || !video.id.videoId) {
  //   return <div>Invalid video data</div>;
  // }

  return (
    <Link
      to={`/videos/${video?.id?.videoId}`}
      className="w-[280px] m-3 rounded-lg cursor-pointer "
    >
      <img
        src={video?.snippet?.thumbnails?.high?.url}
        alt=""
        className="rounded-lg"
      />
      {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.id}`}/> */}

      <div className="font-bold mt-2 ">{video?.snippet?.title} </div>
      <div className="text-sm mt-1 "> {video?.snippet?.channelTitle} </div>
      <div className="text-xs text-gray-700 mt-1 tracking-wider space-x-4">
        <span>100m kurilgan</span>

        <span>{video?.snippet?.publishedAt}</span>
      </div>
    </Link>
  );
};

export default HomeCard;

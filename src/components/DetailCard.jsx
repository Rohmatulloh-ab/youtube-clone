/* eslint-disable react/prop-types */
import ReactPlayer from 'react-player'
import moment from 'moment'
import Icon from '../assets/icon'
// import PropTypes from 'prop-types';
const DetailCard = ({videyo}) => {
  console.log(videyo)
  return (
    <div className='max-w-[650px] mx-20'>
      <ReactPlayer className='rounded-lg' url={`https://www.youtube.com/watch?v=${videyo?.id}`}/>
      <div  className='font-bold text-2xl mt-1'>{videyo?.snippet?.title}</div>
      <div  className='space-x-2 text-gray-800 mt-1'>
        <span>{videyo?.statistics?.viewCount    }ko`rilgan</span>
        <span>{videyo?.snippet?.publishedAt    }</span>
      </div>
      <div  className='font-bold'>{moment(videyo?.snippet?.channelId).startOf('day').fromNow()}</div>
      <div className='text-gray-700 mt-2 text-sm'>
        {videyo?.snippet?.description.substring(0,100)}...</div>

        <div className=' text-xs text-blue-700 mt-4'>
            {videyo?.snippet?.tags?.map((tag)=> `#${tag} `)}
        </div>
        <div className='align-items  space-x-5'>
            <span className='align-items space-x-5'><Icon.like className='icon-style'/> { videyo?.statistics?.likeCount }</span>
            <span className='align-items space-x-5'> <Icon.dislike className='icon-style'/> ko`rilganlar</span>
            
        </div>
    </div>
  )
}

// DetailCard.propTypes = {
//     videyo: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       snippet: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         publishedAt: PropTypes.string.isRequired,
//         channelId: PropTypes.string.isRequired,
//         description: PropTypes.string,
//         tags: PropTypes.arrayOf(PropTypes.string)
//       }).isRequired,
//       statistics: PropTypes.shape({
//         viewCount: PropTypes.string,
//         likeCount: PropTypes.string
//       }).isRequired
//     }).isRequired
//   };

export default DetailCard

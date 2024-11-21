import ReactPlayer from "react-player"
import PropTypes from 'prop-types';

const Vide = ({vider}) => {

    if (!vider || typeof vider.url !== 'string') {
        return <div>Invalid video data</div>;
      }
  return (
    <div>
        <ReactPlayer className='w-[200px] bg-slate-100' url={vider?.url}   />
      
    </div>
  )
}

Vide.propTypes = {
    vider: PropTypes.shape({
      url: PropTypes.string.isRequired,
      
    }).isRequired
  };

export default Vide

import dataFilter from '../assets/data/dataFilter'
// import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const Filter = ({setLetter}) => {
  return (
    <div className=" flex items-center overflow-x-auto justify-evenly  ">
      
      {
        // eslint-disable-next-line react/prop-types
        dataFilter?.map((dafilt,id)=>(
            <div onClick={()=>setLetter(dafilt.name)}  key={id} className="bg-gray-100 cursor-pointer hover:bg-gray-200 px-3 py-1 mx-2 rounded-2xl   ">
                {dafilt.name}
                
            </div>
        ))
      }
    </div>
  );
};
// Filter.propTypes = {
//   setLetter: PropTypes.func.isRequired
// };
export default Filter;

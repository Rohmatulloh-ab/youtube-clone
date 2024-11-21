
import key from '../../keys/key';
import axios from 'axios'
const detailAction= (id)=> async(dispatch)=>{

    
        

    const options = {
        method: 'GET',
        url: key.API,
        params: {
          part: 'contentDetails,snippet,statistics',
          id: id,
        },
        headers: {
          'x-rapidapi-key': key.APIKEY,
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      };

try {
	const response = await axios.request(options);
    dispatch({type:'GET_VIDEO',payload:response.data
    })
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}





export default detailAction
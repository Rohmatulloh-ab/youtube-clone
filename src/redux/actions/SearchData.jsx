



import axios from 'axios'
import key from '../../keys/key';
const searchAction= (keyword)=> async(dispatch)=>{

    
        

    const options = {
        method: 'GET',
        url: key.APISEARCH,
        params: {
          q: keyword,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
          order: 'date'
        },
        headers: {
          'x-rapidapi-key': key.APIKEY,
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      };

try {
	const response = await axios.request(options);
    dispatch({type:'GET_SEARCH',payload:response.data
    })
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}





export default searchAction
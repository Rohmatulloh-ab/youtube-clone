

import axios from 'axios'
import key from '../../keys/key';
const homeAction= (data)=> async(dispatch)=>{

    
    try{

        

const options = {
  
  method: 'GET',
  url: key.APISEARCH,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    part: 'snippet',
    // type: 'video',
    q:data,
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': key.APIKEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};


	await axios.request(options).then(function(response){

    dispatch({type:'GET_VIDEOS',payload:response.data
    })
  });
	
} catch (error) {
	console.log(error);
}
}





export default homeAction
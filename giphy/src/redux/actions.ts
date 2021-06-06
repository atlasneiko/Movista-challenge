import axios from 'axios';
import key from '../config/keys';
export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";
const receiveSuggestions = (suggestions: object) =>({
  type: RECEIVE_SUGGESTIONS,
  suggestions
});
//TODO setup dispatch properly
export const fetchSuggestions = (inputString: string) =>(dispatch:any) =>(
  axios({
    method: "GET",
    url: "https://api.giphy.com/v1/gifs/search/tags",
    data:{
      api_key: `${key}`,
      q: inputString,
      limit: 5
    }
  })
  .then(res =>{
    dispatch(receiveSuggestions(res.data))
  })
  .catch(err => console.log(err))
)
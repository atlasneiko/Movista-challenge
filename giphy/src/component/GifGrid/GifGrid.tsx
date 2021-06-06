import React,{ useState, useEffect} from 'react';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import key from '../../config/keys';

type GifGridProps ={
  submitValue:string;
}

const GifGrid = ({submitValue}:GifGridProps) =>{
  
  // const [localInput, setLocalInput] = useState("cat")  
  const giphyFetch = new GiphyFetch(`${key}`);
  const fetchGifs = (offset: number) =>{
    return giphyFetch.search(submitValue, {offset, limit:20}) 
  }

  return(<div>
    {/* <input value={localInput} onChange={(event)=>{setLocalInput(event.target.value)}} /> */}
    <Grid
        key={`grid-${submitValue}`}
        fetchGifs={fetchGifs}
        width={800}
        columns={3} 
        gutter={6}
      />
      <h1>LOADING~~</h1> 
      
  </div>)
}
export default GifGrid;
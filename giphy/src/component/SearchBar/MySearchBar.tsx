import React,{SetStateAction, Dispatch, useState} from 'react';
import SearchBar from "material-ui-search-bar";
import key from '../../config/keys'


//TODO add auto complete!
type SearchBarProps ={
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  setSubmitValue: Dispatch<SetStateAction<string>>;
}
type Package = {
  api_key: string,
  q: string,
  limit: number
}
const MySearchBar =({searchInput, setSearchInput, setSubmitValue}: SearchBarProps)=>{
  const [suggestions, setSuggestions] = useState([])
  const inputChangeHandler = (input: string):void =>{
    setSearchInput(input)

    
  }
  return (
    <SearchBar 
      cancelOnEscape= {true}
      onChange={(input: string):void =>{
        inputChangeHandler(input)
        }
      }
      onCancelSearch={():void=>{
        setSearchInput("");
        setSubmitValue("");
        }
      }
      onRequestSearch={
        () =>{
          setSubmitValue(searchInput)
        }
      }
      value={searchInput}
      placeholder={"Gif search"}
    />
  )
}

export default MySearchBar;
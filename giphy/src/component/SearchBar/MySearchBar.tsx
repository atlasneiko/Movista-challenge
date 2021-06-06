import React, {useContext} from 'react';
import SearchBar from "material-ui-search-bar";
import SearchInputContext from '../../context/SearchInputContext'

const MySearchBar =()=>{
  const{searchInput, setSearchInput} = useContext(SearchInputContext);
  
  return (
    <SearchBar 
      cancelOnEscape= {true}
      onChange={(e) =>{
        setSearchInput(e.currentTarget.value)
      }}
      value={searchInput}
    />
  )
}

export default MySearchBar;
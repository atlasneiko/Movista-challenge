import React,{useState} from 'react';
import MySearchBar from './component/SearchBar/MySearchBar';

import SearchInputContext from './context/SearchInputContext';

const App = () => {
  const [searchInput, setSearchInput] = useState("")
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <SearchInputContext.Provider value={{searchInput, setSearchInput}}>
        <MySearchBar />

      </SearchInputContext.Provider>
    </div>
  );
}

export default App;

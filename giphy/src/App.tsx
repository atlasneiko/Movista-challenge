import React,{useState} from 'react';
import {Provider} from 'react-redux';
import MySearchBar from './component/SearchBar/MySearchBar';
import GridGif from './component/GifGrid/GifGrid'
import configureStore from './redux/store'
const App = () => {
  const [searchInput, setSearchInput] = useState("")
  const [submitValue, setSubmitValue] = useState('Nyan Cat')
  const store = configureStore();
  return (
    <div className="App">
      <Provider store<>={store}>
      <h1>Hello world!</h1>
        <MySearchBar searchInput={searchInput} setSearchInput={setSearchInput} setSubmitValue={setSubmitValue}/>
        <GridGif submitValue={submitValue}/>
        </Provider>
    </div>
  );
}

export default App;

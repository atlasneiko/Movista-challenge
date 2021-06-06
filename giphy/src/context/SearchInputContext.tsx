import {createContext} from 'react';
interface SearchInputInterface{
  searchInput: string;
  setSearchInput: (input: string) => void;
}
const SearchInputContext = createContext<SearchInputInterface>({
  searchInput: "",
  setSearchInput: ()=>{}
});
export default SearchInputContext;
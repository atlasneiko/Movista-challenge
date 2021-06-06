import { AnyAction, Reducer } from 'redux'
import {RECEIVE_SUGGESTIONS} from './actions'
interface suggestionState {
  suggestion: string[]
}

const initialState: suggestionState = {
  suggestion: []
}

const reducer: Reducer = (
  state = initialState,
  action: AnyAction
):object  =>{
  switch(action.type){
    case RECEIVE_SUGGESTIONS:
      return Object.values(action.suggestions)
    default:
      return state
  }
}
export default reducer;
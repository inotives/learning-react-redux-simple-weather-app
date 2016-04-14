import {FETCH_WEATHER} from '../actions';

export default function(state=[], action){
  switch(action.type){
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // don use push which will mutate the state object
      return [ action.payload.data,  ...state] // ES 6 syntax that is same as above line
  }


  return state;
}

import {FETCH_WEATHER} from '../actions/index';

export default function(state =[], action) {
  //console.log(`Inside reducer_weather old state is ${JSON.stringify(state)} action=${action}`);
  switch(action.type) {
    case FETCH_WEATHER :
    return [ action.payload.data, ...state];

  }
  return state;
}

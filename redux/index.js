const redux = require("redux");
import countReducer from "./count";
import youTubeVideoReducer from "./youTubeVideo";
import favoriteThingsReducer from "./favoriteThing";

const { combineReducers, createStore } = redux;


const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youtubeVideo: youTubeVideoReducer
});

const store = redux.createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store
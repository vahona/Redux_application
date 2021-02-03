
const redux = require('redux')



function changeCount(amount = 1) {
  return {
    type: "CHANGE_COUNT",
    payload: amount
  };
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }

}

function removeFavoriteThing(thing) {
  return {
    type: "REMOVE_FAVORITE_THING",
    payload: thing,
  };
}

const initialState = {
    count: 0,
    favoriteThings: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_COUNT":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "ADD_FAVORITE_THING":
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payload],
      };

    case "REMOVE_FAVORITE_THING":
      return {
        ...state,
        favoriteThings: state.favoriteThings.filter(
          (thing) => thing.toLowerCase() !== action.payload.toLowerCase()
        ),
      };

    default:
      return state;
  }
}


const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(changeCount(2))
store.dispatch(addFavoriteThing("Raindrops on roses"));
store.dispatch(addFavoriteThing("Whiskers on kittens"));
/**
 * Challenge: implement an action creator called `removeFavoriteThing` which takes the string
 * of the favorite thing you want to remove from the array and removes it
 */
store.dispatch(removeFavoriteThing("Raindrops on roses"));



console.log(store);




import store from "./redux"

import {changeCount} from "./redux/count"
import {addFavoriteThing} from "./redux/favoriteThing"
import {removeFavoriteThing} from "./redux/favoriteThing"
import {setYouTubeTitle} from "./redux/youTubeVideo"
import {incrementViewCount} from "./redux/youTubeVideo"
import {upvoteVideo} from "./redux/youTubeVideo"
import {downvoteVideo} from "./redux/youTubeVideo"

store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("wawooo"));
store.dispatch(removeFavoriteThing("wawooo"));
store.dispatch(setYouTubeTitle("Miawon"));
store.dispatch(incrementViewCount(2));
store.dispatch(upvoteVideo());
store.dispatch(downvoteVideo());

import store from "./store";
import {bugAdded, bugRemoved} from "./actions"

store.dispatch(bugAdded("BUG 1"))
store.dispatch(bugRemoved(1))

console.log(store.getState());
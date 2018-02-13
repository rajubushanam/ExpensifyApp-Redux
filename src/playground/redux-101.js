import { createStore } from "redux";

console.log("Redux Store");

//Action is an object to change the state and is sent to the store. action is passed as a second parameter to the createStore method. When an action is dispatched
//the createStore method is called everytime.

//Action generators are functions that contain the Action types defined in them so the dispatch methods doesnt need to define the plain object everytime,
//it can just call the Action generator.

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const setCount = ({ count }) => ({
  type: "SET",
  count: count
});

const resetCount = () => ({
  type: "RESET"
});

//The following function is called Reducer-it takes the action and change the state.
//Reducers are pure functions, pure functions means the outputs are only dependent on its inputs not global variables.
//Never change original state or action in reducers, return objects instead as shown below

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      //   const incrementBy =
      //     typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      //   const decrementBy =
      //     typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//type is a mandatory property to be defined for redux store to understand the type of dispatch

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//   type: "INCREMENT"
// });

//UNSUBSCRIBE will unsubscribe from state changes so any dispatching done after this method will not call subscribe
//unsubscribe();

// store.dispatch({
//     type: "SET",
//     count: 101
// });
store.dispatch(setCount({ count: 101 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

//onsole.log(store.getState());

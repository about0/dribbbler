// @flow

import {
  createActions,
  handleActions,
  combineActions,
  handleAction
} from "redux-actions";
import { increment, searchTerm, setSearchTerm } from "./../actions";

type State = {
  +term: string
};

type Action = {
  type: string
};

const INITIAL_STATE: State = {
  term: ""
};
// const reducer = handleActions(
//   {
//     [setSearchTerm]: (state, action) => {
//       return { ...state, term: action.payload };
//     }
//   },
//   INITIAL_STATE
// );

function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case searchTerm.type:
      return { ...state, term: action.term };

    default:
      (action: empty);
      return state;
  }
}

export default reducer;

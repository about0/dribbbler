import {
  createActions,
  handleActions,
  combineActions,
  handleAction
} from 'redux-actions'
import { increment, decrement, setSearchTerm } from './../actions'

const INITIAL_STATE = {
  counter: 0,
  term: ''
}

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'GET_TERM':
//       return {
//         term: state.term
//       }

//     default:
//       return state
//   }
// }

// const reducer = handleActions(
//   {
//     [combineActions(increment, decrement)]: (
//       state,
//       { payload: { amount } }
//     ) => {
//       return { ...state, counter: state.counter + amount }
//     },
//     [setSearchTerm]: (state, { payload: { term } }) => {
//       return { ...state, term: term }
//     }
//   },
//   INITIAL_STATE
// )

const reducer = handleActions(
  new Map(
    [
      increment,
      (state, action) => ({
        counter: state.counter + action.payload
      })
    ],
    decrement,
    (state, action) => ({
      counter: state.counter - action.payload
    }),
    [
      setSearchTerm,
      (state, action) => ({
        term: action.payload
      })
    ]
  ),
  INITIAL_STATE
)

export default reducer

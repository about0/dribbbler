// @flow

type Action = {
  type: string,
  term: string
};

export const increment: Action = { type: "INCREMENT" };
export const decrement: Action = { type: "DECREMENT" };
export const searchTerm: Action = { type: "SET_SEARCH_TERM" };
export const submitSearch: Action = { type: "SUBMIT_SEARCH" };

export function setSearchTerm(term): Action {
  return { ...searchTerm, term };
}

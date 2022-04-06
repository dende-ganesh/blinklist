import { Action, Blinks } from "./ActionTypes";
import { FETCH_BLINKS, FETCH_FAILURE, FETCH_SUCCESS } from "./DataActiontypes";

type initialStateTypes = {
  loading: boolean;
  blinks: Blinks;
  error: string;
};
const initialState: initialStateTypes = {
  loading: false,
  blinks: [],
  error: "",
};
const dataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_BLINKS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        blinks: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        blinks: [],
        error: action.payload,
      };
  }
};
export default dataReducer;
export type State = ReturnType<typeof dataReducer>;

import axios from "axios";
import { Dispatch } from "redux";
import { Blinks } from "./ActionTypes";
import { FETCH_BLINKS, FETCH_FAILURE, FETCH_SUCCESS } from "./DataActiontypes";

export const fetchBlinks = () => {
  return {
    type: FETCH_BLINKS,
  };
};
export const fetchSuccess = (blinks: Blinks[]) => {
  return {
    type: FETCH_SUCCESS,
    payload: blinks,
  };
};
export const fetchFailure = (error: string) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};
export const fetchBlink = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchBlinks());
    await axios
      .get("http://localhost:3001/trending")
      .then((res) => {
        const blinks = res.data;
        dispatch(fetchSuccess(blinks));
      })
      .catch((error: Error) => {
        const errorVal = error.message;
        dispatch(fetchFailure(errorVal));
      });
  };
};

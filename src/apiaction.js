import React from "react";
import * as constants from './constants';

const apiRequest=()=>({
    type: constants.API_REQUEST,
})
const apiSuccess=(data)=>({
    type: constants.API_SUCCESS,
    payload: {data},
})

const apiFailure =(error)=>({
    type: constants.API_FAILURE,
    payload:error
})

export const fetchApiData = () => async (dispatch) => {
  dispatch(apiRequest());
  try {
    const response = await fetch("http://127.0.0.1:8000/all/");
    const data = await response.json();
    dispatch(apiSuccess(data));
  } catch (error) {
    dispatch(apiFailure(error.message));
  }
};

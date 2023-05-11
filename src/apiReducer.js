import React from "react";
import * as constants from "./constants";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  selectedItem: null,
  searchdata: [],
  Language: "en",
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.API_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case constants.API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case constants.API_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case constants.SELECT_ITEM:
      return { ...state, selectedItem: action.payload };
    case constants.UPDATE_SEARCH:
      return { ...state, isLoading: false, searchdata: action.payload };
    case constants.SET_LANGUAGE:
      return { ...state, isLoading: false, Language: action.payload };
    default:
      return state;
  }
};
export default apiReducer;

import React from "react";
import * as constants from "./constants";

const apiRequest = () => ({
  type: constants.API_REQUEST,
});
const apiSuccess = (data) => ({
  type: constants.API_SUCCESS,
  payload: { data },
});

const apiFailure = (error) => ({
  type: constants.API_FAILURE,
  payload: error,
});
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "bb72deacb83419cce01808aeb3273748d51ed680d3f3735218b47eb41fbe8a5c"
);
myHeaders.append("Content-Type", "text/plain");
var requestOptions = {
  method: "GET",
  // headers:myHeaders
};
export const fetchApiData = () => async (dispatch) => {
  dispatch(apiRequest());
  try {
    const response = fetch("https://admin.srac.me/all/")
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    const data = await response;
    console.log("data is here")
    console.log(data);

    dispatch(apiSuccess(data));
  } catch (error) {
    dispatch(apiFailure(error.message));
  }
};

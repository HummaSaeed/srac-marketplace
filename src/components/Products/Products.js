import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as constants from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import CardComponent from "../CardComponent/CardComponent";

const Products = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var vehicles = useSelector((state) => state.api.data.data);
  const searchdata = useSelector((state) => state.api.searchdata);

  if (!searchdata || !vehicles) {
    console.log("error here");
  } else {
    console.log(vehicles.filter((item) => item.name));
    console.log(vehicles);
    var vehicles = vehicles.filter((item) =>
      item.name.includes(searchdata)
    );
  }
  //  console.log(vehicles);

  return (
    <>
      <p
        style={{
          width: "100%",
          marginLeft: 250,
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: 20,
        }}
      >
        {props.title}
      </p>
      <div className="card_row">
        {vehicles === undefined || vehicles === null ? (
          <p>Loading....</p>
        ) : (
          vehicles.map((vehicle, index) => (
            <Link
              to={`/item/${index}`}
              onClick={() => {
                dispatch({ type: constants.SELECT_ITEM, payload: vehicle });
              }}
              style={{ textDecoration: "none" }}
            >
              <CardComponent vehicle={vehicle} index={index} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Products;

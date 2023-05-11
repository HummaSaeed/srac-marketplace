import React, {useEffect,useState} from "react";
import {useDispatch} from 'react-redux';
import {fetchApiData} from '../apiaction'
import { useNavigate, Link } from "react-router-dom";
import Searchbar from "../components/SearchBar/Searchbar";
import Products from "../components/Products/Products";
import Navbar from "../components/Navbar/Navbar";
import CardComponent from "../components/CardComponent/CardComponent";
const Home = () => {
  const [vehicles, setVehicles] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, [])
  console.log(vehicles);
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="add_container">ad here</div>
    
       <Products title={"Recently Added"} vehicles={vehicles} />
        <div className="add_container">ad here</div>
        <Products title={"Top pics"} />
        <div className="add_container">ad here</div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default Home;

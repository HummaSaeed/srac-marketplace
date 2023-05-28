import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import hamburger from "../../assets/marketplacelogo.png";
import Searchbar from "../SearchBar/Searchbar";
import * as types from "../../constants";

const Navbar = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [locale, setLocale] = useState("en");
  const handleLocaleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    dispatch({ type: types.SET_LANGUAGE, payload: event.target.value });
  };

  return (
    <div className="navbar">
      <img src={hamburger} alt="" className="hamburger" />
      <Searchbar />
      <div className="subclass">
        <select
          className="language"
          value={locale}
          onChange={handleLocaleChange}
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
        <button className="book_button" onClick={()=>{window.open("https://forms.gle/fpSMnrpco3HMfsbj6", "_blank")}}>{t("booking")}</button>
      </div>
    </div>
  );
};

export default Navbar;

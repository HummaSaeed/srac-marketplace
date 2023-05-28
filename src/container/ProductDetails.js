import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import RowData from "../components/RowContent/RowData";
import { useNavigate } from "react-router-dom";
import SecondaryInputField from "../components/SecondaryInputField/SecondaryInputField";
import DetailNavbar from "../components/DetailNavbar/DetailNavbar";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [showData, setshowData] = useState(false);
  const selectedvehicle = useSelector((state) => state.api.selectedItem);

  const { t } = useTranslation();
  const [name, setname] = useState("");
  const handleClick = () => {
    window.open("https://forms.gle/fpSMnrpco3HMfsbj6", "_blank");
  };
  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const btn_data = [{ label: "12 Months" }, { label: "24 Months" }];

  return (
    <>
      <DetailNavbar />
      <img
        src={`https://admin.srac.me${selectedvehicle.img}`}
        alt=""
        className="image"
        style={{ width: "600", height: 400, maxHeight: 400 }}
      />
      <div className="detail__card">
        <p className="details">{t("details")}</p>

        <div className="flex">
          <div className="data_row">
            <RowData label={"brand"} value={selectedvehicle.brand} />
            <RowData label={"model"} value={selectedvehicle.modal} />
            <RowData label={"year"} value={selectedvehicle.year} />
            <RowData label={"category"} value={selectedvehicle.category} />
            <RowData label={"kilometer"} value={selectedvehicle.distance} />
            <RowData
              label={"transmissiontype"}
              value={selectedvehicle.transmissionType}
            />
          </div>
          <div>
            <RowData label={"bodytype"} value={selectedvehicle.bodyType} />
            <RowData label={"price"} value={selectedvehicle.price} />
            <RowData label={"condition"} value={selectedvehicle.condition} />
            <RowData
              label={"paymentoption"}
              value={selectedvehicle.paymentoption}
            />
          </div>
          <div
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <PrimaryButton
              title={"BookNow"}
              classes="btn-edit"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      {/* {showData && (
        <div className="detail__card">
          <p className="details head">Calculate your Installments</p>

          <p className="details head">Down Payments</p>
          <div className="card_row" style={{ width: "100%" }}>
            <div className="card_data">
              <SecondaryInputField
                type="text"
                placeholder=""
                value={name}
                onChange={handleNameChange}
                required
                errorMessage="Please enter name"
              />
              <PrimaryButton
                title={"Calculate"}
                classes={"btn-calculate btn-down-payment align"}
              />
            </div>
            <div>
              <button className="button-light btn-down-payment">
                Monthly Payment 12,000 EGP
              </button>
            </div>
          </div>

          <p className="details head">Duration of Installment</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {btn_data.map((btn_data) => (
              <button className="button-light btn-light-margin">
                {btn_data.label}
              </button>
            ))}
          </div>
        </div>
      )} */}
    </>
  );
};

export default ProductDetails;

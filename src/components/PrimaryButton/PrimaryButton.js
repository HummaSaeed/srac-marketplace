import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PrimaryButton = ({ title, classes, onClick }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Button className={`btn ${classes}`} onClick={onClick}>
        {t(title)}
      </Button>
    </div>
  );
};

export default PrimaryButton;

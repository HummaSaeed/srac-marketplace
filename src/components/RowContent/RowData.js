import React from 'react';
import { useTranslation } from "react-i18next";

const RowData = ({label,value}) => {
  const { t } = useTranslation();
  return (
    <div className="data">
        <span className="header label">{t(label)}</span>
        <span className="header value">{(value)}</span>
    </div>
  )
}

export default RowData
import React from "react";
import { useTranslation } from 'react-i18next';
import { Card, Button } from "react-bootstrap";
import './card.css'

const CardComponent = ({vehicle, index}) => {
  const { t } = useTranslation();
  
  return (
    <Card className="card__container" >
      <Card.Img variant="top" src={`https://admin.srac.me${vehicle.img}`} style={{height:200,width:280}} />
      <Card.Body className="card__body">
        <div className="card__content">
          <span className="header">{vehicle.name}</span>
          <span className="header">{vehicle.year}</span>
        </div>
        <div className="card__content">
          <span className="content">{vehicle.category}</span>
          <span className="content">Price:{vehicle.price}</span>
        </div>
        <div className="card__content">
          <span className="content">From: {vehicle.installment}/month</span>
          <span className="content">{vehicle.mindistance}k min, deposit</span>
        </div>
        <div className="card__content">
          <span className="content">{vehicle.maxdistance}KM</span>
          <span className="content">{vehicle.type}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;

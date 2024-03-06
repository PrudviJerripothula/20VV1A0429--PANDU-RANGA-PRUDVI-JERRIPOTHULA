import React from "react";
import "./card.css";
import Button from "./button";

export const Card = (props) => {
  const { imgSrc, imgAlt, title, description, buttonText, buttonLink } = props;

  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} width="200" height="300" className="card-img"/>
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && buttonLink && <Button text={buttonText} link={buttonLink} />}
    </div>
  )
}

export default Card;
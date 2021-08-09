import React from "react";
import { Link } from "react-router-dom";
// import { SearchCard } from "../styled";
import { StylesShowCard } from "./ShowCard.Styled";

const ShowCard = ({ id, image, name, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <StylesShowCard>
      <h1>{name}</h1>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star me </button>
      </div>
    </StylesShowCard>
  );
};

export default ShowCard;

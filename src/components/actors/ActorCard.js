import React from "react";
import { StyledActorCard } from "./ActorCard.Styled";

const ActorCard = ({ name, gender, country, birthday, deathday, image }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      {console.log(country)}
      <p>{country ? `Comes from ${country.name}` : "No country known"}</p>
      {/* 1. way to write html in jsx */}
      {birthday ? <p>Born {birthday}</p> : null}
      {/* 2. way to jsx in html */}
      <p className="deathday">{deathday ? `Died ${deathday}` : "Alive"}</p>
    </StyledActorCard>
  );
};

export default ActorCard;

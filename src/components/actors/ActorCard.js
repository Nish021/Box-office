import React from "react";

const ActorCard = ({ name, gender, country, birthday, deathday, image }) => {
  return (
    <div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>

      <div>
        <img src={image} alt="actor" />
        <p>{country ? `Comes from ${country}` : "No country known"}</p>
        {/* 1. way to write html in jsx */}
        {birthday ? <p>Born {birthday}</p> : null}
        {/* 2. way to jsx in html */}
        <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
      </div>
    </div>
  );
};

export default ActorCard;

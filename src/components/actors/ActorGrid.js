import React from "react";
import ActorCard from "./ActorCard";
import IMAGE_NOT_FOUND from "../../images/not-found.png";

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          name={person.name}
          gender={person.gender}
          country={person.country}
          birthday={person.birthday}
          deathday={person.deathday}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </div>
  );
};

export default ActorGrid;

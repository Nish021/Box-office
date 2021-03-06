import React from "react";
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { FlexGrid } from "../styled";
import { useShows } from "../../misc/custom-hooks";

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {/* here we are destructuring data into show */}
      {data.map(({ show }) => {
        //if the show we currently rendered is indise our state
        const isStarred = starredShows.includes(show.id);

        //if in state , remove it otherwise add it on click star button
        const onStarredClick = () => {
          if (isStarred) {
            dispatchStarred({ type: "REMOVE", showId: show.id });
          } else {
            dispatchStarred({ type: "ADD", showId: show.id });
          }
        };
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarredClick={onStarredClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;

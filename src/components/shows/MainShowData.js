import React from "react";
import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { Star } from "../styled";
import { Headline, MainDataWrapper, TagList } from "./MainShowData.styled";

const MainShowData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMAGE_NOT_FOUND} alt="show-cover" />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>

          <div>
            <Star />
            <span>{rating.average || "N/A"}</span>
          </div>
        </Headline>

        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <TagList>
          Tags:{" "}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
        </TagList>
      </div>
    </MainDataWrapper>
  );
};

export default MainShowData;

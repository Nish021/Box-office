import React, { useState } from "react";
import ActorGrid from "../components/actors/ActorGrid";
import CustomRadio from "../components/CustomRadio";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/shows/ShowGrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hooks";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";

const Home = () => {
  //defining state for Input
  const [input, setInput] = useLastQuery();
  //defining state for Results
  const [result, setResult] = useState(null);
  //defining state for onSearchresults
  const [radioSearch, setRadioSearch] = useState("shows");
  //defining to make one radio button active  at a time
  const isShowsSearch = radioSearch === "shows";

  //defining update method for setInput
  const onInputchange = (event) => {
    setInput(event.target.value);
  };

  //mapping Enter button with search
  const onClickEnter = (event) => {
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  //defining method for onsearchradio button
  const onSearchRadio = (event) => {
    setRadioSearch(event.target.value);
    console.log(event.target.value); //same as for onInput change
  };

  //onclick event and API fetch
  const onSearch = () => {
    apiGet(`/search/${radioSearch}?q=${input}`).then((result) => {
      setResult(result);
    });
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    // .then(response => response.json())
    // .then(result => (
    //   setResult(result)
    //   // console.log(result)
    // ));
  };

  //SeeResults Fuction - we will able to see results
  const seeResults = () => {
    //doing conditional rendering here

    //if we have results but API didnot return any results
    if (result && result.length === 0) {
      return <div>No Results</div>;
    }
    if (result && result.length > 0) {
      return result[0].show ? (
        <ShowGrid data={result} />
      ) : (
        <ActorGrid data={result} />
      );
      // result.map ( (item) => (
      //   <div key={item.show.id}>{item.show.name}</div>
      // )) :
      // result.map ( (item) => (
      //   <div key={item.person.id}>{item.person.name}</div>
      // ))
    }

    return null;
  };

  return (
    <div>
      <MainPageLayout>
        <SearchInput
          type="text"
          onChange={onInputchange}
          onKeyDown={onClickEnter}
          value={input}
          placeholder="Search for Movie or Actor"
        />

        {/* //radio button */}

        <RadioInputsWrapper>
          <CustomRadio
            label="Shows"
            id="search-shows"
            onChange={onSearchRadio}
            value="shows"
            checked={isShowsSearch}
          />
          {/* <Label htmlFor="search-shows">
            Shows
            <input
              type="radio"
              id="search-shows"
              onChange={onSearchRadio}
              value="shows"
              checked={isShowsSearch}
            />
          </Label> */}
          <CustomRadio
            label="Actors"
            id="search-actors"
            onChange={onSearchRadio}
            value="people"
            checked={!isShowsSearch}
          />
          {/* <label htmlFor=" search-actors">
            Actors
            <input
              type="radio"
              id="search-actors"
              onChange={onSearchRadio}
              value="people"
              checked={!isShowsSearch}
            />
          </label> */}
        </RadioInputsWrapper>

        <SearchButtonWrapper>
          <button type="button" onClick={onSearch}>
            Search
          </button>
        </SearchButtonWrapper>

        {seeResults()}
      </MainPageLayout>
    </div>
  );
};

export default Home;

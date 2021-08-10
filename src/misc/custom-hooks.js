import React, { useReducer, useEffect, useState } from "react";

//defining showsReducer
function showsReducer(prevState, action) {
  switch (action.type) {
    case "ADD": {
      return [...prevState, action.showId];
    }

    case "REMOVE": {
      return prevState.filter((showId) => showId !== action.showId);
    }

    default:
      return prevState;
  }
}

//using local storage that's why using key parameter
function usePersistedReducer(reducer, initialState, key) {
  //using useReducer

  //doing initialization .
  const init = (initial) => {
    //Here we read from local storage.
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
    //done with the initailzation .
  };
  const [state, dispatch] = useReducer(reducer, initialState, init);

  //need to schronize our state whenever we updated localstorage ? useEffect
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]); //using state because we want to run it whenever state changes

  return [state, dispatch];
}

//defining another custom hook - useShows
export function useShows(key = "shows") {
  return usePersistedReducer(showsReducer, [], key);
}

//Last query Custom Hook
export function useLastQuery(key = "lastQuery") {
  const [input, setInput] = useState(() => {
    const persisted = sessionStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : " ";
  });

  //here setInput will not write to session storage thats why we need to enchance it
  // using setPersistedInput , it will resemble setInput
  const setPersistedInput = (newState) => {
    setInput(newState);
    sessionStorage.setItem(key, JSON.stringify(newState));
  };

  return [input, setPersistedInput];
}

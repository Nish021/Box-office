// import { React, useEffect, useState, useReducer } from "react";
import { React, useEffect, useReducer } from "react";
import { useParams } from "react-router";
import Cast from "../components/shows/Cast";
import Details from "../components/shows/Details";
import MainShowData from "../components/shows/MainShowData";
import Seasons from "../components/shows/Seasons";
import { apiGet } from "../misc/config";
import { InfoBlock, ShowPageWrapper } from "./Show.styled";

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        show: action.show,
        isLoading: false,
        error: null,
      };
    }

    case "FETCH_FAILED": {
      return {
        ...prevState,
        isLoading: false,
        error: action.error,
      };
    }

    default:
      return prevState;
  }
};

const Show = () => {
  // const params = useParams();
  const { id } = useParams();

  // useState implementation
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useReducer Implementation
  //  const [state, dispatch] useReducer (reducer, initialState);
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", show: results });
          // setShow(results);
          // setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", error: err.message });

          // setError(err.message);
          // setIsLoading(false);
        }
      });

    //clean up function
    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log("show", show);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error Occurred : {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <InfoBlock>
        <MainShowData
          image={show.image}
          name={show.name}
          rating={show.rating}
          summary={show.summary}
          tags={show.genres}
        />
      </InfoBlock>

      <InfoBlock>
        <h1>Details</h1>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h1>Seasons</h1>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h1>Cast</h1>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;

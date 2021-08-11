import React, { useState, useEffect } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";
import ShowGrid from "../components/shows/ShowGrid";
import { useShows } from "../misc/custom-hooks";

const Noloading = {
  margin: "auto",
  textAlign: "center",
};
const Starred = () => {
  //Here not using dispatch
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
    return () => {};
  }, [Starred]);
  return (
    <div>
      <MainPageLayout>
        {isLoading && <div>Shows are still loading</div>}
        {error && <div>Error occured: {error}</div>}
        {!isLoading && !shows && (
          <div style={Noloading}>No shows were added</div>
        )}
        {!isLoading && !error && shows && <ShowGrid data={shows} />}
      </MainPageLayout>
    </div>
  );
};

export default Starred;

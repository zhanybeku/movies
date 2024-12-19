"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const MovieDetails = () => {
  const params = useParams();
  const { movieId } = params;
  const [details, setDetails] = useState();
  const [crew, setCrew] = useState();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(`/api/movies/${movieId}`);
        const data = await response.json();
        console.log("Details:", data); // Debugging log
        setDetails(data);
      } catch (e) {
        console.error(e);
      }
    };

    const getCrew = async () => {
      try {
        const response = await fetch(`/api/movies/${movieId}/crew`);
        const data = await response.json();
        console.log("Crew Data:", data); // Debugging log
        setCrew(data);
      } catch (e) {
        console.error(e);
      }
    };
    getCrew();
    getDetails();
  }, [movieId]);

  if (!details || !crew ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Movie ID: {movieId}</div>
      <p>{details.overview}</p>
    </div>
  );
};

export default MovieDetails;

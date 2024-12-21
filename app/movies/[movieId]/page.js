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

  if (!details || !crew) {
    return <div className="ml-5 mt-5">Loading...</div>;
  }

  const imageUrl = details
    ? `https://image.tmdb.org/t/p/original${details.poster_path}`
    : "";

  return (
    <div className="flex px-5 mx-auto">
      <div className="flex-[2] mr-10">
        <h1 className="text-8xl font-black my-5">{details.title}</h1>
        <ul>
          <li className="mt-4 font-bold text-2xl">Director: </li>
          <li className="ml-5">{crew.crew.find((member) => member.job === "Director").name}</li>
          <li className="font-bold text-2xl">Cast:</li>
          {crew.cast.slice(0, 10).map((member, index) => (
            <li key={index} className="ml-5">
              {member.name}
            </li>
          ))}
        </ul>
        <p className="font-bold text-2xl">Description:</p>
        <p className="ml-5">{details.overview}</p>
      </div>
      <div className="flex-[1]">
        <img
          src={imageUrl}
          alt={`Poster for ${details.title}`}
          className="w-full h-auto object-cover rounded-md my-5"
        />
      </div>
    </div>
  );
};

export default MovieDetails;

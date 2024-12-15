import React from "react";
import Image from "next/image";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const movieTitle = movie.title;
  return (
    <div>
      <Image
        src={imageUrl}
        alt={`${movie.title}`}
        width={300}
        height={300}
      />
    </div>
  );
};

export default MovieCard;

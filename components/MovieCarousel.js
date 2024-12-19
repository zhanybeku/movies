import React from "react";
import { Carousel } from "@material-tailwind/react";
import MovieCard from "./MovieCard";

const MovieCarousel = ({ movies }) => {
  return (
    <Carousel className="mt-5 rounded-xl w-[80%] h-[70vh] bg-red-400">
      {movies.map(movie => 
        <MovieCard key={movie.id} movie={movie} />
      )}
      
    </Carousel>
  );
};

export default MovieCarousel;

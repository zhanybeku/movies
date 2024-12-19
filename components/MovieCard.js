"use client";
import Link from "@node_modules/next/link";
import { useState, useEffect } from "react";

const MovieCard = ({ movie }) => {
  const [director, setDirector] = useState("Loading...");
  useEffect(() => {
    const getDirector = async () => {
      try {
        const response = await fetch(`/api/movies/${movie.id}/crew`);
        const data = await response.json();
        const director = data.crew.find((member) => member.job === "Director");
        setDirector(director.name);
      } catch (e) {
        console.error(e);
      }
    };
    getDirector();
  }, []);

  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div
      className="relative h-full w-full object-cover rounded-md overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/30 to-transparent">
        <div className="absolute bottom-10 w-full text-center px-2">
          <Link href={`/movies/${movie.id}`}>
            <h3 className="text-white text-3xl font-black">
              {movie.title} ({movie.release_date.split("-")[0]})
            </h3>
          </Link>
          <p className="text-white text-lg font-bold">
            Director: {director ? director : "loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

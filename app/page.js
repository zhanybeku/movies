"use client";

import React, { useEffect, useState } from "react";

import MovieCard from "@components/MovieCard";

const Home = () => {
  const accessToken = process.env.TMDB_ACCESS_TOKEN;

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const results = data.results;
        console.log(results);

        const randomMovies = getRandomMovies(results, 5);
        setMovieList(randomMovies);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  const getRandomMovies = (array, count) => {
    const randomIndices = new Set();
    while (randomIndices.size < count) {
      randomIndices.add(Math.floor(Math.random() * array.length));
    }
    return Array.from(randomIndices).map((index) => array[index]);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="pt-10 text-5xl text-center">
        The place for all the movie information <br />
        you will ever need
      </h2>
      <div className="h-[70vh] w-[80%] bg-red-400 rounded-xl">
        <div className="grid grid-cols-2 gap-4 mt-10">
          {movieList.map((movie) => 
            <MovieCard key={movie.id} movie={movie}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

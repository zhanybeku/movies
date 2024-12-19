"use client";

import React, { useEffect, useState } from "react";

import MovieCarousel from "@components/MovieCarousel";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/movies/top");
        const data = await response.json();
        const randomMovies = getRandomMovies(data.results, 5);
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
      <MovieCarousel movies={movieList}/>
    </div>
  );
};

export default Home;

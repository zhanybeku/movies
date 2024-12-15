"use client";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const result = await fetch("https://api.exchangerate.host/latest");
      const exchangeRate = await result.json();
      console.log(exchangeRate);
    }
    getData();
  }, []);
  console.log(temp);

  return (
    <div className="flex flex-col items-center">
      <h2 className="pt-10 text-5xl text-center">
        The place for all the movie information <br />
        you will ever need!
      </h2>
      <div className="h-[70vh] w-[80%] bg-red-400 rounded-xl"></div>
    </div>
  );
};

export default Home;

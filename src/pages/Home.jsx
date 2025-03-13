import React, { useEffect } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="">
      {/* display imported components to build homepage */}
      <NavBar />
      <div className="absolute text-3xl left-10 top-24">I love you babe!</div>
    </div>
  );
};

export default Home;

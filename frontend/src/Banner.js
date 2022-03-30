import React, { useEffect, useState, useRef } from "react";
import axios from "./axios";
import "./Banner.css";

export default function Banner({ fetchUrl }) {
  const posterUrl = useRef("https://image.tmdb.org/t/p/original");
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      const randomNumber = Math.floor(
        Math.random() * response.data.results.length
      );
      setMovie(response.data.results[randomNumber]);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${posterUrl.current}${movie.backdrop_path})`,
        backgroundSize: "cover",
        height: "95vh",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>
    </div>
  );
}

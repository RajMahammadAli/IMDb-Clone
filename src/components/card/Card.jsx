import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Card({ movie }) {
  return (
    <div className="group sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.id}`}>
        <Image
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="movie poster"
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></Image>
        <div className="space-y-2 p-2">
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center gap-2">
            {movie.release_date || movie.first_air_date}{" "}
            <BsFillHandThumbsUpFill />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

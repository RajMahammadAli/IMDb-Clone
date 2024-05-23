import React from "react";
import Card from "../card/Card";

export default function FetchMovies({ results }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4 gap-4">
      {results.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
}

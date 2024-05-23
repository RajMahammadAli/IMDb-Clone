import FetchMovies from "@/components/fetchMovies/FetchMovies";
import React from "react";

export default async function page({ params }) {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}f&api_key=079b2bdf3cb6f38db2186adedd80aca6`
  );

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-10">No results found</h1>
      )}
      {results && <FetchMovies results={results} />}
    </div>
  );
}

import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card";

export const Movies = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <ul className="min-h-[calc(100vh-80px)] px-5 py-10">
      <div className="m-2 px-8">
        <h1 className="mb-8 mt-0 text-center text-3xl font-bold text-white">
          🎬 Movie Collection
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-20">
          {moviesData.Search.map((curMovie) => (
            <Card key={curMovie.imdbID} curMovie={curMovie} />
          ))}
        </div>
      </div>
    </ul>
  );
};

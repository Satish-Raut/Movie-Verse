import { useLoaderData } from "react-router-dom";

export const MoviesDetails = () => {
  const movie = useLoaderData();

  return (
    <div className="min-h-screen text-white p-6 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white/10 rounded-2xl shadow-xl/50 shadow-black-500/50 overflow-hidden border border-white/20 animate-fadeIn p-3 "> 
        {/* Top Section */}
        <div className="flex flex-col md:flex-row">
          {/* Poster */}
          <div className="md:w-1/3 overflow-hidden rounded-2xl">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="md:w-2/3 p-6 space-y-4">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p className="text-sm text-gray-400">
              {movie.Year} • {movie.Runtime} • {movie.Genre}
            </p>

            <p className="text-gray-300">{movie.Plot}</p>

            <div>
              <p><span className="font-semibold">Director:</span> {movie.Director}</p>
              <p><span className="font-semibold">Writer:</span> {movie.Writer}</p>
              <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
            </div>

            {/* Ratings */}
            <div className="flex flex-wrap gap-4 pt-4">
              {movie.Ratings?.map((rating, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <p className="text-sm font-medium">{rating.Source}</p>
                  <p className="text-lg font-bold">{rating.Value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Extra Info */}
        <div className="m-1 border-t border-gray-800 p-8 flex flex-col md:flex-row justify-between text-sm text-black">
          <p><span className="font-semibold ">Language:</span> {movie.Language}</p>
          <p><span className="font-semibold">Country:</span> {movie.Country}</p>
          <p><span className="font-semibold">Awards:</span> {movie.Awards}</p>
          <p><span className="font-semibold">Box Office:</span> {movie.BoxOffice}</p>
        </div>
      </div>
    </div>
  );
};

import { NavLink } from "react-router-dom";

// MovieCard.jsx
export const Card = ({ curMovie }) => {
  const { Poster, imdbID, Title, Year } = curMovie || {};
  console.log("Card imdbID:", imdbID);

  return (
    <li className="group relative w-64 aspect-[2/3] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg ring-1 ring-black/5  cursor-pointer">
      {/* Poster / Fallback */}
      {Poster && Poster !== "N/A" ? (
        <NavLink to={`/movies/${imdbID}`}>
          <img
            src={Poster}
            alt={Title || imdbID}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </NavLink>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-700">
          <span className="text-zinc-300">{Title || imdbID}</span>
        </div>
      )}

      {/* Hover gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

      {/* Top-right action (appears on hover) */}
      <button
        type="button"
        className="absolute right-3 top-3 translate-y-[-8px] opacity-0 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur transition-all duration-300 hover:bg-white/20 group-hover:translate-y-0 group-hover:opacity-100"
        aria-label="Add to favorites"
        onClick={(e) => {
          e.stopPropagation();
          // handle favorite here
        }}
      >
        ★
      </button>

      {/* Bottom info panel */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="line-clamp-2 text-base font-semibold text-white">
            {Title || "Untitled"}
          </h3>
          <p className="mt-0.5 text-sm text-white/70">{Year || imdbID}</p>

          <div className="mt-3 flex gap-2">
            {/* If you're using react-router, swap for <NavLink to={`/movie/${imdbID}`}> */}
            <NavLink
              to={`/movies/${imdbID}`}
              className="inline-flex items-center rounded-xl 
              bg-white/10 px-3 py-1 text-sm text-white backdrop-blur transition-colors hover:bg-white/20"
              onClick={() => {
                console.log("NavLink clicked", imdbID);
              }}
            >
              Details
            </NavLink>
            <button
              type="button"
              className="inline-flex items-center rounded-xl bg-white/10 px-3 py-1 text-sm text-white backdrop-blur transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                // handle play trailer
              }}
            >
              Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Subtle lift on hover */}
      <div className="pointer-events-none absolute inset-0 transition-transform duration-300 group-hover:-translate-y-1" />
    </li>
  );
};

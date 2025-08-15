

export const getMovieDetails = async ({ params }) => {
  console.log("From GetMovieDetails: ", params);
  const id = params.movieID;
  console.log("From GetMovieDetails: ", id)

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

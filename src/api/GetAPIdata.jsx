export const GetMoviedata = async () => {
  try {
    const responce = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titanic&page1`
    );

    const data = responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

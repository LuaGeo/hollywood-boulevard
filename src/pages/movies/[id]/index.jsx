const MovieId = ({ movie }) => {
  return (
    <div>
      <div>MovieId</div>
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieId;

export const getServerSideProps = async (context) => {
  const apiKey = process.env.API_KEY;

  try {
    const { data } = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/top_rated/movies/${context.params.id}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(data);
    return {
      props: {
        movies: data.results,
      },
    };
  } catch (error) {}
};

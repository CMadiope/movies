import tmdb from "@/pages/api/tmdb";

const getStaticProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=71544f1c2a2ee7119c4899009c6843b3&language=en-US`
  );
  const data = await res.json();
  return {
    props: {
      movie: data[0],
    },
  };
};

const getStaticPaths = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=71544f1c2a2ee7119c4899009c6843b3&language=en-US&page=1`
  );
  const data = await res.json();
  const ids = data.results.map((item) => item.id);

  const paths = ids.map((item) => ({
    params: { id: item.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Movie = ({movie }) => {
  
  const { id, title, name, backdrop_path, first_air_date, release_date } = movie;

  return (
    <div className='text-white'>
      <h1>
        {title || name}
      </h1>
    </div>
  );
};

export default Movie;

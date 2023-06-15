import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ movies }) {
  return (
    <main className={``}>
      <div>
        {movies.map((movie) => {
          return (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <article>{movie.title}</article>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const apiKey = process.env.API_KEY;

  try {
    const { data } = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/top_rated",
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

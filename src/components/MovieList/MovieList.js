export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <>
      <h2>{movies.title || movies.name}</h2>
    </>
  );
}

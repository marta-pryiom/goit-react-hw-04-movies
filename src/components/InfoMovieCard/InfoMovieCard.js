export default function InfoMovieCard({ movieInfo }) {
  console.log(movieInfo);
  const {
    title,
    // release_date,
    // vote_average,
    // poster_path,
    // overview,
    // genres,
    name,
  } = movieInfo;
  return (
    <>
      <h1> {title || name}</h1>
    </>
  );
}

/* /* <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div>
        {title && (
          <h1>
            {title}
            {release_date ? (
              <span>({release_date.substring(0, 4)})</span>
            ) : (
              <span>(N/A)</span>
            )}
          </h1>
        )}
      </div> */
// </> */

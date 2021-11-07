import { useEffect, useState } from 'react';
import API from '../../services/movie-api';
import ButtonTop from '../../components/ButtonTop';
import Form from '../../components/Form';
import ListAllMovies from '../../components/ListAllMovies/ListAllMovies';

import { useRouteMatch } from 'react-router-dom';

export default function MoviesPage({ location, history }) {
  const [movies, setMovies] = useState([]);
  const { path } = useRouteMatch();
  console.log(path);
  const search = new URLSearchParams(location.search).get('query') ?? '';
  console.log(search);
  useEffect(() => {
    if (search === '') {
      return;
    }

    API.searchWordMovie(search).then(movies => {
      setMovies(prev => [...prev, ...movies]);
      console.log(movies);
    });
  }, [search]);

  const onSubmitForm = searchWord => {
    history.push({ ...location, search: `?query=${searchWord}` });
    setMovies([]);
    console.log();
  };
  return (
    <>
      <Form onSubmit={onSubmitForm} />
      {movies.length !== 0 && <ListAllMovies moviesList={movies} />}
      {movies.length > 10 && <ButtonTop />}
    </>
  );
}

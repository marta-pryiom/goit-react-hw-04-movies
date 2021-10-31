import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import API from '../../services/movie-api';
import ListAllMovies from '../../components/ListAllMovies';
import MovieDetailsPage from '../MovieDetailsPage';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button';
import ButtonTop from '../../components/ButtonTop';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      try {
        const movieResult = await API.getMovies(page);
        setMovies(prev => [...prev, ...movieResult]);
        if (page !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [page]);

  const handleBtnLoadMoreClick = () => {
    setLoading(true);
    setPage(prev => prev + 1);
    setLoading(false);
  };
  return (
    <Switch>
      <Route exact path="/">
        <ListAllMovies moviesList={movies} />
        {loading ? (
          <Loader />
        ) : (
          movies.length !== 0 && <Button onClick={handleBtnLoadMoreClick} />
        )}
        {movies.length > 10 && <ButtonTop />}
      </Route>
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
    </Switch>
  );
}

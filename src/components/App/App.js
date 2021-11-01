import { Switch, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from '../Container';
import Navigation from '../Navigation';
// import HomePage from '../../views/HomePage';
// import MoviesPage from '../../views/MoviesPage';
import Loader from '../Loader/Loader';
const HomePage = lazy(() =>
  import('../../views/HomePage' /* webpackChunkName:"homepage"*/)
);
const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /* webpackChunkName:"moviepage"*/)
);

export default function App() {
  return (
    <Container>
      <ToastContainer />
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </Container>
  );
}

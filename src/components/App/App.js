import { Switch, Route } from 'react-router';
import Container from '../Container';
import Navigation from '../Navigation';
import HomePage from '../../views/HomePage';
import MoviesPage from '../../views/MoviesPage';

export default function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Container>
  );
}

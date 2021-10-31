import { useState, useEffect } from 'react';
import API from '../../services/movie-api';
import NoInfo from '../NoInfo';
import s from './Reviews.module.css';
export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.movieReviews(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p className={s.Text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <NoInfo />
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import API from '../../services/movie-api';
export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.movieReviews(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

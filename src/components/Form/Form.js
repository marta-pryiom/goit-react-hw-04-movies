import { useState } from 'react';
export default function Form({ onSubmit }) {
  const [searchWord, setSearchWord] = useState('');

  const handleInputSearch = e => {
    const { value } = e.target;
    setSearchWord(value);
    console.log(searchWord);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchWord.trim() === '') {
      console.log('що шукати?');
    }
    onSubmit(searchWord);
    reset();
  };
  const reset = () => {
    setSearchWord('');
  };
  return (
    <div>
      <h1>MoviesPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleInputSearch}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

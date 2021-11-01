import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import s from './Form.module.css';
export default function Form({ onSubmit }) {
  const [searchWord, setSearchWord] = useState('');

  const handleInputSearch = e => {
    setSearchWord(e.target.value.toLowerCase());
    console.log(searchWord);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchWord.trim() === '') {
      toast.error('Enter a word to search for!');
      return;
    }

    onSubmit(searchWord);
    reset();
  };
  const reset = () => {
    setSearchWord('');
  };
  return (
    <div>
      <form className={s.Box} onSubmit={handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleInputSearch}
        />
        <button className={s.FormButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};

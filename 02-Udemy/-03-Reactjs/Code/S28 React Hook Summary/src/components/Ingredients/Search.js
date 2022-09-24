import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';
import './Search.css';

const Search = React.memo((props) => {
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  const { onLoadingIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          'https://react-hooks-update-dd2d0-default-rtdb.firebaseio.com/ingredients.json' +
            query,
          'GET'
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if ((!isLoading, !error && data)) {
      const loadedIngredient = [];
      for (const key in data) {
        loadedIngredient.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadingIngredients(loadedIngredient);
    }
  }, [data, isLoading, error, onLoadingIngredients]);

  return (
    <section className='search'>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className='search-input'>
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type='text'
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;

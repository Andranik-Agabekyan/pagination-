import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCountriesTC, nextPageAC, prevPageAC } from './Redux/reducer';
import ShowCountries from './components/ShowCountries';

function App() {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countriesReducer.countries)
  const currentPage = useSelector(state => state.countriesReducer.currentPage)
  const pageSize = useSelector(state => state.countriesReducer.pageSize)

  const lastIndexOnPage = currentPage * pageSize
  const firstIndexOnPage = lastIndexOnPage - pageSize
  const currentIndexOnPage = countries.slice(firstIndexOnPage, lastIndexOnPage)

  useEffect(() => {
    dispatch(getCountriesTC())
  }, [])

  const nextPage = () => {
    dispatch(nextPageAC())
  }

  const prevPage = () => {
    dispatch(prevPageAC())
  }

  return (
    <div className="App">
      <ShowCountries countries={currentIndexOnPage} />
      <button disabled={currentPage === 1} onClick={prevPage}>prev page</button>
      <button onClick={nextPage}>next page</button>
    </div>
  );
}

export default App;

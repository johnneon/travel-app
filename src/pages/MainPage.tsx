import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';

interface IMainPageProps {
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const { countries, loading, error } = useTypedSelector((state) => state.countries);
  const { fetchAllCountries } = useAction();
  
  useEffect(() => {
    fetchAllCountries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error is {error}</h1>
  }

  return (
    <>
      {countries.map((country) => {
        return (
          <div key={country.id}>
            <Link to={`/country/${country.id}`} >{country.capital}</Link>
          </div>
        )
      })}
    </>
  );
};

export default MainPage;

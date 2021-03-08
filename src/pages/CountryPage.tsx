import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
interface ICountryPageProps {
}
interface ParamTypes {
  id: string
}

const CountryPage: React.FunctionComponent<ICountryPageProps> = (props) => {
  const { country, loading, error } = useTypedSelector((state) => state.country);
  const { id } = useParams<ParamTypes>();
  const { fetchCountry } = useAction();

  useEffect(() => {
    fetchCountry(id);
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error is {error}</h1>
  }

  return (
    <>
      <div>
        {country.description}
      </div>
      <Link to={'/'}>Back</Link>
    </>
  );
};

export default CountryPage;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import {
  Backdrop,
  CircularProgress
} from '@material-ui/core';
interface ParamTypes {
  id: string
}

const CountryPage: React.FunctionComponent = () => {
  const { country, loading, error } = useTypedSelector((state) => state.country);
  const { id } = useParams<ParamTypes>();
  const { fetchCountry } = useAction();
  
  useEffect(() => {
    fetchCountry(id);
  }, [id]);

  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress color="secondary" />
      </Backdrop>
    )
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

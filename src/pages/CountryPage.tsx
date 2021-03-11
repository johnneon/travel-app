/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import {
  Backdrop,
  CircularProgress
} from '@material-ui/core';
import DataMainScreen from '../containers/ DataMainScreen';

interface ParamTypes {
  id: string;
}

const CountryPage: React.FunctionComponent = () => {
  const { loading, error } = useTypedSelector((state) => state.country);
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
      <DataMainScreen />
      <Link to={'/'}>Back</Link>
    </>
  );
};

export default CountryPage;

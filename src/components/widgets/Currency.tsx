/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { IRootState } from '../../store/redusers';
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
interface CurrencyProps {
  currency?: string;
  labels?: {
    currentCurrency: string;
    is: string;
    costs: string;
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  currencyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0 0 20px 0px rgb(255, 255, 255, .5)',
    borderRadius: 20,
    margin: theme.spacing(2),
    '@media(max-width: 514px)': {
      margin: theme.spacing(1),
      padding: '8px !important',
    },
  },
  current: {
    fontSize: "2vh",
    marginBottom: 20,
  },
  item: {},
  rate: {
    fontSize: "3vh",
  },
}));

const Currency: React.FunctionComponent<CurrencyProps> = ({
  currency = "USD",
  labels = {
    currentCurrency: "Local currency",
    is: "is",
    costs: "costs",
  },
}) => {
  const classes = useStyles();

  const [currencyData, setCurrencyData] = useState<any>({});

  
  useEffect(() => {
    const getCurrency = async () => {
      const apiKey = "fc20ef5a40a3bd033b50643e";
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;
      const response = await fetch(url);
      const data = await response.json();
  
      setCurrencyData(data);
    };
    currency && getCurrency();
  }, []);

  const getRate = (type: string) => {
    return currencyData?.conversion_rates[type] || "unknown";
  };

  // if currencyData is empty
  if (Object.keys(currencyData).length === 0) return null;

  return (
    <Grid item className={classes.currencyContainer}>
      <Typography align="center" variant="h5" color="textPrimary">
        {labels.currentCurrency} {labels.is} {currency}
      </Typography>
      <Typography align="center" variant="h5" color="textPrimary">
      1 {currency} {labels.costs}
      </Typography>
      {currency !== "USD" && (
        <Typography align="center" variant="h5" color="textPrimary" className={classes.rate}>{getRate("USD")} USD</Typography>
      )}
      {currency !== "EUR" && (
        <Typography align="center" variant="h5" color="textPrimary" className={classes.rate}>{getRate("EUR")} EUR</Typography>
      )}
      {currency !== "RUB" && (
        <Typography align="center" variant="h5" color="textPrimary" className={classes.rate}>{getRate("RUB")} RUB</Typography>
      )}
    </Grid>
  );
};

const mapStateToProps = (state: IRootState) => {
  const { currency } = state?.country?.country;
  const { CURRENT_CURRENCY, IS, COSTS } = state?.laguage?.dictionary;
  
  return {
    labels: {
      currentCurrency: CURRENT_CURRENCY,
      is: IS,
      costs: COSTS,
    },
    currency
  };
};

export default connect(
  mapStateToProps
)(Currency);

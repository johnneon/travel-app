/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { connect } from 'react-redux';
import { IRootState } from '../../store/redusers';

interface CurrencyProps {
  currency?: string;
  countryName: string;
  labels?: {
    currentCurrency: string;
    is: string;
    costs: string;
  };
}

const useStyles = makeStyles(() => ({
  currencyContainer: {
    width: "40vh",
    minHeight: "30vh",
    backgroundColor: "#2b374f",
    opacity: 0.6,
    borderRadius: 20,
    fontSize: "2vh",
    paddingTop: 50,
    textAlign: "center",
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
  countryName,
  labels = {
    currentCurrency: "Currency in",
    is: "is",
    costs: "costs",
  },
}) => {
  const classes = useStyles();

  const [currencyData, setCurrencyData] = useState<any>({});

  const getCurrency = async () => {
    const apiKey = "fc20ef5a40a3bd033b50643e";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;
    const response = await fetch(url);
    const data = await response.json();

    setCurrencyData(data);
  };

  useEffect(() => {
    currency && getCurrency();
  }, []);

  const getRate = (type: string) => {
    return currencyData?.conversion_rates[type] || "unknown";
  };

  // if currencyData is empty
  if (Object.keys(currencyData).length === 0) return null;

  return (
    <div className={classes.currencyContainer}>
      <div className={classes.current}>
        {labels.currentCurrency} {countryName} {labels.is} {currency}
      </div>
      <div className={classes.item}>
        1 {currency} {labels.costs}
      </div>
      {currency !== "USD" && (
        <div className={classes.rate}>{getRate("USD")} USD</div>
      )}
      {currency !== "EUR" && (
        <div className={classes.rate}>{getRate("EUR")} EUR</div>
      )}
      {currency !== "RUB" && (
        <div className={classes.rate}>{getRate("RUB")} RUB</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  const { name, currency } = state?.country?.country;
  
  return { name, currency };
};

export default connect(
  mapStateToProps
)(Currency);

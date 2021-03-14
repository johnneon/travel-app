/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { connect } from 'react-redux';
import { IRootState } from '../../store/redusers';

// Adding 0 for less 10 num
const addZero = (n: any) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

// Check day
const dayName = (n: number) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[n];
};

// Check month
const monthName = (n: number) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[n];
};

const useStyles = makeStyles((theme: Theme) => ({
  timeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0 0 20px 0px rgb(255, 255, 255, .5)',
    borderRadius: 20,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    fontSize: "3vh",
  },
  date: {
    fontSize: "3vh",
    textAlign: "center",
  },
  time: {
    fontSize: "5vh",
    textAlign: "center",
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
  },
}));

interface TimeProps {
  cityName: string;
  timezoneOffset?: number;
  labels?: {
    today: string;
  };
}

interface StateProps {
  timeString?: {
    __html: string;
  };
  dateString?: string;
}

const Time: React.FunctionComponent<TimeProps> = ({
  cityName,
  labels = { today: "Today in" },
  timezoneOffset = 0,
}) => {
  const classes = useStyles();

  const timerRef = useRef<any>({});

  const [timeData, setTimeData] = useState<StateProps>({});

  const getToday = () => {
    const today = new Date();
    const timeZoneSpecificCityInMinutes = +timezoneOffset * 60;
    const currentTimeZoneInMinutes = today.getTimezoneOffset();
    const timeOffsetInMS =
      (currentTimeZoneInMinutes + timeZoneSpecificCityInMinutes) * 60000;
    today.setTime(today.getTime() + timeOffsetInMS);
    return today;
  };

  const showTime = () => {
    const today = getToday();

    let hour = addZero(today.getHours());
    let min = addZero(today.getMinutes());
    let sec = addZero(today.getSeconds());

    const timeString = {
      __html: `<span>${hour}</span>:<span>${min}</span>:<span>${sec}</span>`,
    };
    setTimeData((state: StateProps) => ({ ...state, timeString }));
  };

  const showDate = () => {
    const today = getToday(),
      date = addZero(today.getDate()),
      day = dayName(today.getDay()),
      month = monthName(today.getMonth());

    // Display date
    const dateString = `${day}, ${date} ${month}`;
    setTimeData((state: StateProps) => ({ ...state, dateString }));
  };

  useEffect(() => {
    showTime();
    showDate();

    timerRef.current = setInterval(showTime, 1000);

    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, []);

  return (
    <Grid item className={classes.timeContainer} >
      <Typography align="center" variant="h4" color="textPrimary">
        {labels.today} {cityName}:
      </Typography>
      <Typography color="textPrimary" align="center" variant="h4">{timeData.dateString}</Typography>
      <Typography color="textPrimary" align="center" variant="h2"
        dangerouslySetInnerHTML={timeData.timeString}
      ></Typography>
    </Grid>
  );
};

const mapStateToProps = (state: IRootState) => {
  const { timezone, name } = state?.country?.country;

  return {
    timezoneOffset: timezone,
    cityName: name,
  };
};

export default connect(
  mapStateToProps
)(Time);
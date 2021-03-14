/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
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

const useStyles = makeStyles(() => ({
  timeContainer: {
    width: "40vh",
    minHeight: "30vh",
    backgroundColor: "#2b374f",
    opacity: 0.6,
    borderRadius: 20,
    paddingTop: 50,
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
    <div className={classes.timeContainer}>
      <div className={classes.text}>
        {labels.today} {cityName}:
      </div>
      <div className={classes.date}>{timeData.dateString}</div>
      <div
        className={classes.time}
        dangerouslySetInnerHTML={timeData.timeString}
      ></div>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  const { timezone } = state?.country?.country;
  
  return { timezone };
};

export default connect(
  mapStateToProps
)(Time);

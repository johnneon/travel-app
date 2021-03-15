import React from 'react';
import { Tabs, Tab, makeStyles } from '@material-ui/core';

interface IAuthTabsProps {
  changeActiveTabHandler: (event: React.ChangeEvent<{}>, newValue: number) => void;
  activeTab: number;
}

const useStyles = makeStyles(() => ({
  auth__tabs: {
    maxWidth: '50%',
    minWidth: '40%',
  },
}));

const AuthTabs: React.FunctionComponent<IAuthTabsProps> = ({ activeTab, changeActiveTabHandler }) => {
  const classes = useStyles();

  return (
    <Tabs
      variant="fullWidth"
      value={activeTab}
      indicatorColor="primary"
      textColor="inherit"
      onChange={changeActiveTabHandler}
      scrollButtons="off"
    >
      <Tab
        label="Sing Up"
        className={classes.auth__tabs}
      />
      <Tab
        label="Login"
        className={classes.auth__tabs}
      />
    </Tabs>
  );
};

export default AuthTabs;

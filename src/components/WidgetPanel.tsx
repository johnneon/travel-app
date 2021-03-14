import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Currency from './widgets/Currency';
import Time from './widgets/Time';
import Weather from './widgets/Weather';

interface IWidgetPanelProps {
}

const WidgetPanel: React.FunctionComponent<IWidgetPanelProps> = (props) => {
  return (
    <Container>
      <Grid container alignItems="stretch" justify="space-around" spacing={4}>
        <Time />
        <Weather />
        <Currency />
      </Grid>
    </Container>
  );
};

export default WidgetPanel;

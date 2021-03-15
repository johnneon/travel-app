import React, { useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core/';
import { checkFieldValidity } from '../../utils/utils';
import { variables } from '../../data/variables';
import { IFetchUserData } from '../../types/user';

const { FULLNAME_REGEXP, EMAIL_REGEXP, PASSWORD_REGEXP } = variables;

interface IAuthFormProps {
  activeTab: number;
  action: (data: IFetchUserData) => void;
}

const useStyles = makeStyles({
  input: {
    color: '#000 !important',
    '& .MuiInputBase-input': {
      color: '#000 !important',
    }
  }
});

const AuthForm: React.FunctionComponent<IAuthFormProps> = ({ activeTab, action }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const [formValidity, setFormValidity] = useState({
    fullName: true,
    email: true,
    password: true,
  });

  const setFormDataHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const checkFormValidity = () => {
    const { fullName, email, password } = formData;

    const isFullNameValid = !!activeTab || checkFieldValidity(fullName, FULLNAME_REGEXP);
    const isEmailValid = checkFieldValidity(email, EMAIL_REGEXP);
    const isPasswordValid = checkFieldValidity(password, PASSWORD_REGEXP);

    setFormValidity({
      fullName: isFullNameValid,
      email: isEmailValid,
      password: isPasswordValid,
    });

    return isPasswordValid && isEmailValid && isFullNameValid;
  };

  const formActionHandler = () => {
    const isFormValid = checkFormValidity();

    if (!isFormValid) {
      return;
    }

    action(formData);
  };

  const pressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      formActionHandler();
    }
  };

  return (
    <Grid
    container
    direction="column"
    alignItems="stretch"
    spacing={1}
  >
    {!activeTab && (
      <Grid item>
        <TextField
          required
          fullWidth
          size="small"
          variant="outlined"
          color="primary"
          label="Name"
          type="text"
          name="fullName"
          className={classes.input}
          helperText={!formValidity.fullName ? 'Name is not valid.' : ' '}
          error={!formValidity.fullName}
          onChange={setFormDataHandler}
          onKeyPress={pressHandler}
        />
      </Grid>
    )}
    <Grid item>
      <TextField
        required
        fullWidth
        size="small"
        variant="outlined"
        label="Email"
        type="email"
        name="email"
        className={classes.input}
        helperText={!formValidity.email ? 'Email is not valid.' : ' '}
        error={!formValidity.email}
        onChange={setFormDataHandler}
        onKeyPress={pressHandler}
      />
    </Grid>
    <Grid item>
      <TextField
        required
        fullWidth
        size="small"
        variant="outlined"
        label="Password"
        type="password"
        name="password"
        className={classes.input}
        helperText={!formValidity.password ? 'Password is not valid.' : ' '}
        error={!formValidity.password}
        onChange={setFormDataHandler}
        onKeyPress={pressHandler}
      />
    </Grid>
    <Grid item xs={12} sm={5}>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={formActionHandler}
        onKeyPress={pressHandler}
      >
        {!activeTab ? 'Sign Up' : 'Login'}
      </Button>
    </Grid>
  </Grid>
  );
};

export default AuthForm;

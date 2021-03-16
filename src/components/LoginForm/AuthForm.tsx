import React, { useRef, useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  makeStyles,
  withStyles,
  Theme,
  Fab
} from '@material-ui/core/';
import AddIcon from "@material-ui/icons/Add";
import { checkFieldValidity } from '../../utils/utils';
import { variables } from '../../data/variables';
import { IFetchUserData } from '../../types/user';

const { FULLNAME_REGEXP, EMAIL_REGEXP, PASSWORD_REGEXP } = variables;

interface IAuthFormProps {
  activeTab: number;
  action: (data: FormData) => void;
}

const useStyles = makeStyles({
  input: {
    color: '#000 !important',
    '& .MuiInputBase-input': {
      color: '#000 !important',
    }
  }
});

const CssTextField = withStyles((theme: Theme) => ({
  root: {
    marginBottom: 15,
    outline: 'none',
    '& label.Mui-focused': {
      color: `${theme.palette.primary.contrastText} !important`,
    },
    '& .MuiInputLabel-formControl': {
      color: `${theme.palette.primary.contrastText} !important`,
      opacity: .7,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.light,
    },
    '& .MuiInputBase-input': {
      color: `${theme.palette.primary.contrastText} !important`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.light,
        opacity: .7,
      },
      '&:hover fieldset': {
        opacity: 1,
      },
    },
    '&.Mui-focused': {
      borderColor: theme.palette.primary.contrastText,
      opacity: 1,
    },
  },
}))(TextField);

const AuthForm: React.FunctionComponent<IAuthFormProps> = ({ activeTab, action }) => {
  const classes = useStyles();
  const inputFile = useRef<HTMLInputElement>(null);
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
    if (event?.currentTarget?.files) {
      // const forma = new FormData();
      // forma.append('avatar', event.currentTarget.files[0]);
      // forma.append('abc', 'abs');
      // console.log(forma);
      setFormData({ ...formData, [event.target.name]: event.currentTarget.files[0] });
    }

    
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

    const postData = new FormData();

    for (let key in formData) {
      // @ts-ignore
      console.log(key, formData[key]);
      if(key === 'avatar') {                
        // @ts-ignore
        for (let key in formData['avatar']) {
          // @ts-ignore
          postData.append('avatar', formData['avatar'][key]);
        }  
      } else {
        // @ts-ignore
        postData.append(key, formData[key]);
      }
    }
    console.log(postData);

    action(postData);
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
        <CssTextField
          required
          fullWidth
          size="small"
          variant="outlined"
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
      <CssTextField
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
      <CssTextField
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
    <Grid item>
    <label htmlFor="upload-photo">
      <input
          style={{ display: "none" }}
          id="upload-photo"
          name="avatar"
          type="file"
          onChange={setFormDataHandler}
          // ref={inputFile}
        />
        <Fab
          color="secondary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <AddIcon /> Upload photo
        </Fab>
    </label>
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

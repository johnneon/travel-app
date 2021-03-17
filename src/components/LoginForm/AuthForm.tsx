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
import { useTypedSelector } from '../../hooks/typedSelector.hook';

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

interface IFormData {
  email: string;
  password: string;
  fullName: string;
}

const AuthForm: React.FunctionComponent<IAuthFormProps> = ({ activeTab, action }) => {
  const classes = useStyles();
  const inputFile = useRef<HTMLInputElement>(null);
  const {
    NAME,
    INVALID_NAME,
    EMAIL,
    INVALID_EMAIL,
    PASSWORD,
    INVALID_PASSWORD,
    UPLOAD_PHOTO,
    SIGNIN,
    SIGNUP,
    UPLOADED_PHOTO,
  } = useTypedSelector((store) => store.language.dictionary);

  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    fullName: '',
  });

  const [formValidity, setFormValidity] = useState({
    fullName: true,
    email: true,
    password: true,
  });

  const [image, setImage] = useState(false);

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

  const handleCheckFiles = () => {
    if (
        inputFile
        && inputFile?.current
        && inputFile?.current?.files
        && inputFile?.current?.files?.length > 0
      ) {
        setImage(true);
      } else {
      setImage(true);
    }
  }

  const formActionHandler = () => {
    const isFormValid = checkFormValidity();

    if (!isFormValid) {
      return;
    }

    const postData = new FormData();

    for (let key in formData) {
      // @ts-ignore
      postData.append(key, formData[key]);
    }
    // @ts-ignore
    postData.append('avatar', inputFile?.current?.files[0]);
     
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
          label={NAME}
          type="text"
          name="fullName"
          className={classes.input}
          helperText={!formValidity.fullName ? {INVALID_NAME} : ' '}
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
        label={EMAIL}
        type="email"
        name="email"
        className={classes.input}
        helperText={!formValidity.email ? {INVALID_EMAIL} : ' '}
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
        label={PASSWORD}
        type="password"
        name="password"
        className={classes.input}
        helperText={!formValidity.password ? {INVALID_PASSWORD} : ' '}
        error={!formValidity.password}
        onChange={setFormDataHandler}
        onKeyPress={pressHandler}
      />
    </Grid>
    {!activeTab && (
      <Grid item>
        <label htmlFor="upload-photo">
          <input
              style={{ display: "none" }}
              id="upload-photo"
              name="avatar"
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={handleCheckFiles}
              ref={inputFile}
            />
            <Fab
              color={image ? "default" : "secondary"}
              size="small"
              component="span"
              aria-label="add"
              variant="extended"
            >
              <AddIcon /> {image ? UPLOADED_PHOTO : UPLOAD_PHOTO}
            </Fab>
        </label>
      </Grid>
    )}
    <Grid item xs={12} sm={5}>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={formActionHandler}
        onKeyPress={pressHandler}
      >
        {!activeTab ? `${SIGNUP}` : `${SIGNIN}`}
      </Button>
    </Grid>
  </Grid>
  );
};

export default AuthForm;

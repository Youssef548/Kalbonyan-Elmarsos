import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: blurChangeHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  // const [enteredEmail, setEnteredEmail] = useState('');

  // const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.trim().includes('@');

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const emailInputBlurHandler = (event) => {
  //   setTouchedEnteredEmail(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();

    resetEmailInput(false);
  };

  const nameInputClasses =
    emailInputHasError || nameInputHasError
      ? 'form-control invalid'
      : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler} className={nameInputClasses}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={blurChangeHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty</p>
        )}
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>E-mail must not be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

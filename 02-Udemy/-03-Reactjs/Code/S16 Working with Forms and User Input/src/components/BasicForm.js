import useInput from '../hooks/use-input';

// ? 'form-control invalid'
// : 'form-control';

// Validate First Name
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameBlurChangeHandler,
    reset: firstResetNameInputValue,
  } = useInput((value) => value.trim() !== '');

  // Validate Last Name

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: LastNameInputChangeHandler,
    inputBlurHandler: LastNameBlurChangeHandler,
    reset: resetLastNameInputValue,
  } = useInput((value) => value.trim() !== '');

  // Validate Email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInputValue,
  } = useInput((value) => value.trim().includes('@'));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    firstResetNameInputValue();
    resetLastNameInputValue();
    resetEmailInputValue();
  };

  const nameInputClass = !enteredFirstNameHasError
    ? 'form-control'
    : 'form-control invalid';

  const lastNameInputClass = !enteredLastNameHasError
    ? 'form-control'
    : 'form-control invalid';

  const emailInputClass = !enteredEmailHasError
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameBlurChangeHandler}
          />
          {enteredFirstNameHasError && (
            <p className='error-text'>The Must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={LastNameInputChangeHandler}
            onBlur={LastNameBlurChangeHandler}
          />
          {enteredLastNameHasError && (
            <p className='error-text'>The Last Name Must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailHasError && (
          <p className='error-text'>Email must not be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

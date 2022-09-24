import React, { useRef } from 'react';

import Card from '../ui/Card';

import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const sumbitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={sumbitHandler}>
        <div className={classes.control}>
          <label htmlFor={'title'}>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor={'image'}>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor={'address'}>Address</label>
          <input
            type='text'
            required
            id='address'
            ref={addressInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor={'description'}>Description</label>
          <textarea
            required
            id='description'
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;

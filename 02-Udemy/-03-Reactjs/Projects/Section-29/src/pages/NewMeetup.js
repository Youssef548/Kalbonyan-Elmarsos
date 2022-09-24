import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory()


  const addMeetupHandler = (meetupData) => {
    fetch('https://meetup-75348-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history.replace('/')
    });
  };
  return (
    <section>
      <h1>Add a new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;

import { Fragment } from 'react';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    
    console.log(data);

    router.replace('/');
  }
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active react meetups!'
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;

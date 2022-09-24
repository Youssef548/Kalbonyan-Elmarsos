import React from 'react';

const MyParagraph = (props) => {
  console.log('MyParagraph Runnging');
  return <p>{props.children}</p>;
};

export default MyParagraph;

import React from 'react';
// import MyParagraph from './MyParargraph';
import MyParagraph from './MyParargraph';

const DemoOutput = (props) => {
  console.log('DemoOutPut Runnging');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);

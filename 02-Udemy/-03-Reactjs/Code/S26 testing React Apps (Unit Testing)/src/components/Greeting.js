import { useState } from 'react';

import Output from './output';

const Greeting = () => {
  const [changeText, SetChangeText] = useState(false);

  const changeTextHandler = () => {
    SetChangeText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changeText && <Output>it's good to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;

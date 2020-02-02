import React, { Suspense, useState, useDeferredValue } from "react";
import { TextInput, Tile} from 'carbon-components-react';
import SlowList from './components/SlowList';

const FourthSlide = () => {

  const [text, setText] = useState("Hello Frontend Meetup!");

  // const deferredText = useDeferredValue(text, {
  //   timeoutMs: 5000
  // });

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="full-width">

      <Tile>
        <h1>6 - useDeferred</h1>
      </Tile>

      <Tile>
        <TextInput
          value={text}
          onChange={handleChange}
        />
        <SlowList text={text} />
      </Tile>

    </div>
  );
};

export default FourthSlide;

import React, { useState } from "react";
import WelcomeSlide from './welcome';
import FirstSlide from './1';
import SecondSlide from './2';
import ThirdSlide from './3';
import FourthSlide from './4';
import FifthSlide from './5';
import SixthSlide from './6';
import {Button} from "carbon-components-react";
import { SlideNum } from "./components/SlideNum";

const RenderSlides = ({ slide }) => {
  switch (slide) {
    case 0:
        return <WelcomeSlide />
    case 1:
      return <FirstSlide />;
    case 2:
      return <SecondSlide />;
    case 3:
      return <ThirdSlide />;
    case 4:
      return <FourthSlide />
    case 5:
      return <FifthSlide />;
    case 6:
      return <SixthSlide />;
    default:
      return <WelcomeSlide />
  }
}

const App = () => {
  const [actualSlide, setActualSlide] = useState(1);

  return (
    <div className="App">
      <RenderSlides slide={actualSlide} />

      <SlideNum actualSlide={actualSlide} />
      <div className="slide-controlls">
        {/*<Button*/}
        {/*  onClick={() => setActualSlide(0)}*/}
        {/*>*/}
        {/*  Welcome!*/}
        {/*</Button>*/}
        <Button
          onClick={() => setActualSlide(1)}
        >
          Slide 1
        </Button>
        <Button
          onClick={() => setActualSlide(2)}
        >
          Slide 2
        </Button>
        <Button
          onClick={() => setActualSlide(3)}
        >
          Slide 3
        </Button>
        <Button
          onClick={() => setActualSlide(4)}
        >
          Slide 4
        </Button>
        <Button
          onClick={() => setActualSlide(5)}
        >
          Slide 5
        </Button>
        <Button
          onClick={() => setActualSlide(6)}
        >
          Slide 6
        </Button>
      </div>
    </div>
  );
}

export const SlidesContext = React.createContext();

export default App;
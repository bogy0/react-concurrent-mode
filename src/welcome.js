import React, { Suspense, useState } from "react";
import {Button, Tile, SkeletonPlaceholder} from 'carbon-components-react';

const WelcomeSlide = () => {

  return (
    <div className="full-width">
      <Tile className="card">
        <div className="card__text">
          <h1>Hello Frontend Meetup!</h1>
          <hr/>
          <h3>I'm Balint Lendvai<br/>Work@IBM, Watson Media</h3>
        </div>
      </Tile>
    </div>
  );
};

export default WelcomeSlide;

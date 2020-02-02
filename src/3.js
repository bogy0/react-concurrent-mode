import React, { Suspense, useState } from "react";
import {Button, SkeletonPlaceholder, Tile} from 'carbon-components-react';
import { Renew32 } from '@carbon/icons-react';
import { createResource } from "./apiWrapper";
import { Person } from "./components/Person";
import { Num } from "./components/Num";
import { ProfilePic } from "./components/ProfilePic";
import { AsyncButton } from "./components/AsyncButton";
import { ErrorBoundary } from "./components/ErrorBoundary";

const initialResource = createResource();

const ThirdSlide = () => {

  const [resource, setResource] = useState(initialResource);

  return (
    <div className="full-width">

      <Tile>
        <h1>3 - Built in useTrainsition</h1>
        <ul>
          <li></li>
        </ul>
      </Tile>

      <ErrorBoundary>
        <Tile className="card">
          <Suspense fallback={<SkeletonPlaceholder style={{ width: '200px', height: '200px' }}/>}>
            <ProfilePic resource={resource} />
          </Suspense>
          <div className="card__text">
            <Suspense fallback={<h1>loading person...</h1>}>
              <Person resource={resource} />
            </Suspense>
            <hr/>
            <Suspense fallback={<h1>loading num...</h1>}>
              <Num resource={resource} />
            </Suspense>
          </div>
        </Tile>
      </ErrorBoundary>

      <AsyncButton
        renderIcon={Renew32}
        timeoutMs={1000}
        onClick={() => {setResource(createResource())}}
      >
        Get new data
      </AsyncButton>
    </div>
  );
};

export default ThirdSlide;

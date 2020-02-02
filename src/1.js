import React, { Suspense, useState } from "react";
import {Button, Tile, SkeletonPlaceholder} from 'carbon-components-react';
import { Renew32 } from '@carbon/icons-react';
import { createResource } from "./apiWrapper";
import { Person } from "./components/Person";
import { Num } from "./components/Num";
import { ProfilePic } from "./components/ProfilePic";
import {ErrorBoundary} from "./components/ErrorBoundary";
import { InfoWithoutSuspense } from "./components/InfoWithoutSuspense";

const initialResource = createResource();

const FirstSlide = () => {
  const [resource, setResource] = useState(initialResource);

  return (
    <div className="full-width">

      <Tile>
        <h1>1 - Suspense Data Fetching</h1>
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

      <div style={{ display: 'flex' }}>
        <Button
          renderIcon={Renew32}
          onClick={() => setResource(createResource())}
        >
          Get new data
        </Button>

        <InfoWithoutSuspense />
      </div>
    </div>
  );
};

export default FirstSlide;

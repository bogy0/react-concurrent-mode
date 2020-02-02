import React, { Suspense, useState, useDeferredValue, } from "react";
import {Button, SkeletonPlaceholder, Tile} from 'carbon-components-react';
import { Renew32 } from '@carbon/icons-react';
import { createResource } from "./apiWrapper";
import { Person } from "./components/Person";
import { Num } from "./components/Num";
import { ProfilePic } from "./components/ProfilePic";
import { AsyncButton } from "./components/AsyncButton";
import { ErrorBoundary } from "./components/ErrorBoundary";

const initialResourceForFifth = createResource();

const FourthSlide = () => {

  const [resourceForFifth, setResourceForFifth] = useState(initialResourceForFifth);
  // const deferredResource = useDeferredValue(resourceForFifth, {
  //   timeoutMs: 3000,
  // });
  //
  // const isStale = deferredResource !== resourceForFifth;

  return (
    <div className="full-width">

      <Tile>
        <h1>4 - useDeferred</h1>
      </Tile>

      <ErrorBoundary>
        <Tile className="card">
          <Suspense fallback={<SkeletonPlaceholder style={{ width: '200px', height: '200px' }}/>}>
            <ProfilePic resource={resourceForFifth} />
          </Suspense>
          <div className="card__text">
            <Suspense fallback={<h1>loading person...</h1>}>
              <Person resource={resourceForFifth} />
            </Suspense>
            <hr/>
            <Suspense fallback={<h1>loading num...</h1>}>
              <Num resource={resourceForFifth} />
              {/*<div className={isStale ? 'deferred' : ''}>*/}
              {/*  <Num resource={deferredResource} />*/}
              {/*</div>*/}
            </Suspense>
          </div>
        </Tile>
      </ErrorBoundary>

      <AsyncButton
        renderIcon={Renew32}
        timeoutMs={1000}
        onClick={() => {setResourceForFifth(createResource())}}
      >
        Get new data
      </AsyncButton>
    </div>
  );
};

export default FourthSlide;

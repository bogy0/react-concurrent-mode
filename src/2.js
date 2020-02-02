import React, { Suspense, useState, useTransition } from "react";
import {Button, SkeletonPlaceholder, Tile} from 'carbon-components-react';
import { Renew32 } from '@carbon/icons-react';
import { createResource } from "./apiWrapper";
import { Person } from "./components/Person";
import { Num } from "./components/Num";
import { ProfilePic } from "./components/ProfilePic";
import { ErrorBoundary } from "./components/ErrorBoundary";
import {InfoUseTransition} from "./components/InfoUseTransition";

const initialResource = createResource();

const SecondSlide = () => {
  const [resource, setResource] = useState(initialResource);

  // const [startTransition, isPending] = useTransition({
  //   timeoutMs: 1000
  // });

  return (
    <div className="full-width">

      <Tile>
        <h1>2- useTransition</h1>
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
          // onClick={() => startTransition(() => {
          //   setResource(createResource())
          // })}
          // disabled={isPending}
        >
          Get new data
        </Button>

        <InfoUseTransition />
      </div>
    </div>
  );
};

export default SecondSlide;

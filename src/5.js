import React, { Suspense, SuspenseList, useState, } from "react";
import {Button, Tile, SkeletonPlaceholder} from 'carbon-components-react';
import { Renew32 } from '@carbon/icons-react';
import { createResource } from "./apiWrapper";
import { Person } from "./components/Person";
import { Num } from "./components/Num";
import { SlowerProfilePic } from "./components/SlowerProfilePic";
import { ArticleOne } from "./components/Article1";
import { ArticleTwo } from "./components/Article2";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoaderPost } from './components/LoaderPost';

const initialResourceForFourth = createResource();

const FifthSlide = (props) => {

  const [resourceForFourth, setResourceForFourth] = useState(initialResourceForFourth);
  // revealOrder: 'forwards', 'backwards', 'together'
  // tail: 'collapsed', 'hidden'

  return (
    <div className="full-width">

      <ErrorBoundary>

          <Tile className="card">
            <Suspense fallback={<SkeletonPlaceholder style={{ width: '200px', height: '200px' }}/>}>
              <SlowerProfilePic resource={resourceForFourth} />
              <div className="card__text">
                <Person resource={resourceForFourth} />
                <hr/>
                <Num resource={resourceForFourth} />
              </div>
            </Suspense>
          </Tile>

          <Tile>
            <Suspense fallback={<LoaderPost />}>
              <ArticleOne resource={resourceForFourth} />
            </Suspense>
          </Tile>

          <Tile>
            <Suspense fallback={<LoaderPost />}>
              <ArticleTwo resource={resourceForFourth} />
            </Suspense>
          </Tile>

      </ErrorBoundary>

      <Button
        renderIcon={Renew32}
        timeoutMs={1000}
        onClick={() => {setResourceForFourth(createResource())}}
      >
        Get new data
      </Button>
    </div>
  );
};

export default FifthSlide;
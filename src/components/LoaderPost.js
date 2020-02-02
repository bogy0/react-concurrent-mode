import React from 'react';
import {SkeletonText} from "carbon-components-react";

export const LoaderPost = () => (
  <SkeletonText heading={false} lineCount={2} paragraph width="100%"/>
);
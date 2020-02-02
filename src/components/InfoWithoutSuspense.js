import React from "react";
import { ModalWrapper, OrderedList, ListItem } from 'carbon-components-react';
import { Information32 } from '@carbon/icons-react';

export const InfoWithoutSuspense = () => {
  return (
    <>
      <ModalWrapper
        buttonTriggerText="Before Suspense"
        className="some-class"
        disabled={false}
        id="transactional-passive-modal"
        modalHeading="Before Suspense"
        modalLabel="Data Fetching"
        passiveModal
        selectorPrimaryFocus="[data-modal-primary-focus]"
        renderTriggerButtonIcon={Information32}
        triggerButtonIcon={Information32}
        triggerButtonIconDescription="More info"
        triggerButtonKind="secondary"
      >
        <div>
          <h5>Example for Fetch-on-Render</h5>
          <OrderedList style={{ marginBottom: '20px' }}>
            <ListItem>Mount component</ListItem>
            <ListItem>We start fetching user details</ListItem>
            <ListItem>We wait…</ListItem>
            <ListItem>We finish fetching user details</ListItem>
            <ListItem>We start fetching posts</ListItem>
            <ListItem>We wait…</ListItem>
            <ListItem>We finish fetching posts</ListItem>
            <ListItem>Render Component with Data</ListItem>
          </OrderedList>
          <p style={{ marginBottom: '20px' }}>Problem: WATERFALL!</p>
          <img src="./../assets/fetch-on-render-screenshot.png" alt="Fetch On Render screenshot" style={{ width: '100%' }}/>
          <hr/>

          <h5>Example for Fetch-Then-Render</h5>
          <OrderedList style={{ marginBottom: '20px' }}>
            <ListItem>We start fetching user details</ListItem>
            <ListItem>We start fetching posts</ListItem>
            <ListItem>We wait…</ListItem>
            <ListItem>We finish fetching user details</ListItem>
            <ListItem>We finish fetching posts</ListItem>
          </OrderedList>
          <p style={{ marginBottom: '20px' }}>Problem: Have to wait booth!</p>
          <img src="./../assets/fetch-profile-data.png" alt="Fetch profile data screenshot" style={{ width: '100%' }}/>
          <img src="./../assets/fetch-then-render.png" alt="Fetch Then Render screenshot" style={{ width: '100%' }}/>
          <hr/>
          <a target="_blank" href="https://www.lucidchart.com/documents/view/e2ba000e-1edb-459b-a4a3-8a143689f022/0_0">Diagram Comparison</a>
        </div>
      </ModalWrapper>
    </>
  )
};

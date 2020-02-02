import React from "react";
import { ModalWrapper, UnorderedList, ListItem } from 'carbon-components-react';
import { Information32 } from '@carbon/icons-react';

export const InfoSuspense = () => {
  return (
    <>
      <ModalWrapper
        buttonTriggerText="Show Notes"
        className="some-class"
        disabled={false}
        id="transactional-passive-modal"
        modalHeading="Suspense"
        modalLabel="React Concurent Mode"
        passiveModal
        selectorPrimaryFocus="[data-modal-primary-focus]"
        renderTriggerButtonIcon={Information32}
        triggerButtonIcon={Information32}
        triggerButtonIconDescription="More info"
        triggerButtonKind="secondary"
      >
        <p className="bx--modal-content__text">
          <strong>Suspense decouples three things:</strong>
          <UnorderedList>
            <ListItem>Visual presentation of loading states</ListItem>
            <ListItem>Where data is being read</ListItem>
            <ListItem>How data is requested and streamed in</ListItem>
          </UnorderedList>
          <br />

          More:
          <br />
          <UnorderedList>
            <ListItem>Single declarative way to specify loading states decoupled from what is loading (GraphQL, REST, JS bundle, images) and where in the tree</ListItem>
            <ListItem>Graceful orchestration of those loading states (control over reveal order, avoiding flicker)</ListItem>
            <ListItem>Suspense also offers some new capabilities that data sources can take advantage of. For example, a response can gradually “unlock” deeper levels of data as it streams. That’s not new... but with declarative loading states, it means the app can also “unlock” UI in coordinated way.</ListItem>
            <ListItem>I like to think of Suspense as a way to <strong>find balance between technological and UX extremes</strong>. Technologically, streaming data and rendering immediately as it comes is fastest. UX-wise, it would be terrible to see every component load separately and shift layout every few ms.</ListItem>
            <ListItem>Suspense lets us choose well-defined boundaries where we’re willing to show loading states. That lets us stream data as it comes (and start rendering immediately) but only show result to the user in places we agreed to, in order we agreed to, and with a frequency that feels good.</ListItem>
            <ListItem>And let’s not forget it’s not just about data. Suspense doesn’t care what we’re waiting for. It uses the same mechanism for code, data, and any other async things you need. So you can stream code and data in parallel, and the app can “unlock” deeper loading states as we fetch.</ListItem>
          </UnorderedList>
          <br /><br />
          (source: <a href="https://twitter.com/dan_abramov">Dan</a>)
        </p>
      </ModalWrapper>
    </>
  )
};

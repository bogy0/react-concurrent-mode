import React from "react";
import { ModalWrapper } from 'carbon-components-react';
import { Information32 } from '@carbon/icons-react';

export const InfoUseTransition = () => {
  return (
    <>
      <ModalWrapper
        buttonTriggerText="Show Notes"
        className="some-class"
        disabled={false}
        id="transactional-passive-modal"
        modalHeading="useTransition"
        modalLabel="React Concurent Mode"
        passiveModal
        selectorPrimaryFocus="[data-modal-primary-focus]"
        renderTriggerButtonIcon={Information32}
        triggerButtonIcon={Information32}
        triggerButtonIconDescription="More info"
        triggerButtonKind="secondary"
      >
        <p className="bx--modal-content__text">
          "useTransition() lets us skip/delay the "recessed" state. That's when we had to hide some existing content and show a spinner instead. Delaying that is usually better.
          <br /><br />
          However, we want to get to the "skeleton" state as soon as possible. We don't want to wait for everything.
          <br /><br />
          So useTransition() lets us wait for all the boundaries outside to be ready. But once they're ready, we show the new page, and let the rest of the content in their own boundaries load incrementally. Potentially with to coordinate their reveal order.
          <br /><br />
          When you setState(), some components stay on the page, and some components get unmounted or newly mounted, right?
          <br /><br />
          "Recessed" boundaries already exist on the page. Hiding them is bad because you hide existing content.
          <br /><br />
          "Skeleton" are new boundaries. You haven't seen them yet.
          <br /><br />
          For example, if you navigate from Feed to Profile, hiding the whole top-level app (including tabbar) would be bad. Because we already showed it before. It's bad to temporarily hide existing content.
          <br /><br />
          But it's ok that on Profile page, "Photos" section might still be loading."
          <br /><br />
          (source: <a href="https://twitter.com/dan_abramov">Dan</a>)
        </p>
      </ModalWrapper>
    </>
  )
};

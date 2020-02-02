import React, { useTransition } from "react";
import { Button } from 'carbon-components-react';

export const AsyncButton = (props) => {
  const {
    children,
    timeoutMs,
    onClick,
    ...rest
  } = props;

  const [startTransition, isPending] = useTransition({
    timeoutMs
  });

  return (
    <Button
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      disabled={isPending}
      {...rest}
    >
      {isPending ? <span>Loading...</span> : children}
    </Button>
  );
};

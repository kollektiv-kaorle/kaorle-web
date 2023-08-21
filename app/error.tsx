"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { LinkButton } from "./_components/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg">
      <p>
        Sorry, irgendwas ist schief gelaufen. Du kannst die{" "}
        <LinkButton onClick={() => window.location.reload()}>
          Seite neu laden
        </LinkButton>
        . Vielleicht klappt es dann.
      </p>
    </div>
  );
}

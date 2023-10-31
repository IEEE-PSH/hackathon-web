import React, { useState, useEffect } from "react";
import { Button } from "@/app/_components/ui/button";

export default function SubmitButton({
  isSubmitting,
  isSubmitSuccessful,
}: {
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
}) {
  const [showResponse, setShowResponse] = useState(false);
  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      (async function () {
        //deliberate pause
        setShowResponse(true);
        await new Promise((resolve) => setTimeout(resolve, 1300));
        setShowResponse(false);
      })();
    }
  }, [isSubmitting]);

  return (
    <Button
      type="submit"
      className="absolute bottom-4 right-4 min-w-[100px]"
      disabled={isSubmitting || showResponse}
    >
      {!showResponse ? "Submit" : "Sent!"}
    </Button>
  );
}
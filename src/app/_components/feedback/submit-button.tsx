import React, { useState, useEffect } from "react";
import { Button } from "@/app/_components/ui/button";
import { Icons } from "../ui/icons";

type SubmitButtonProps = {
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
};
export default function SubmitButton({
  isSubmitting,
  isSubmitSuccessful,
}: SubmitButtonProps) {
  const [showResponse, setShowResponse] = useState(false);
  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      void (async function () {
        //intentional pause
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
      {isSubmitting ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : showResponse ? (
        "Sent!"
      ) : (
        "Submit"
      )}
    </Button>
  );
}

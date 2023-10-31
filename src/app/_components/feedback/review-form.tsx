import React from "react";
import { CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import SubmitButton from "@/app/_components/feedback/submit-button";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const reviewFormSchema = z.object({
  review: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message exceeds 500 characters"),
});

export default function reviewForm({
  setIsSubmitting,
}: {
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = 

  function onSubmit(){

  }

  return (
    <form
      id="reviewForm"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <CardTitle className="mt-[12px] mb-[18px] text-[19px]">
        How was your experience?
      </CardTitle>
      <Textarea
        {...register("review")}
        className="h-[250px]"
        placeholder="Tell us more."
        disabled={isSubmitting}
      ></Textarea>
      {errors.review && (
        <p className="absolute mt-1 text-sm text-red-500">{`${errors.review.message}`}</p>
      )}
      <SubmitButton
        isSubmitting={isSubmitting}
        isSubmitSuccessful={isSubmitSuccessful}
      />
    </form>
  );
}
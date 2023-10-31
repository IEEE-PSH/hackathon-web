import React, { useState } from "react";
import { CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { sendBugReport } from "@/components/feedback/actions";
import Dropzone from "react-dropzone";
import SubmitButton from "@/components/feedback/submitButton";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bugReportFormSchema = z.object({
  bugReport: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message exceeds 500 characters"),
});

export default function bugReportForm({
  setIsSubmitting,
}: {
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(bugReportFormSchema),
  });

  const [files, setFiles] = useState();
  return (
    <form
      id="bugReportForm"
      onSubmit={handleSubmit(async (data) => {
        await sendBugReport(data, files);
        reset();
      })}
    >
      <CardTitle className="mt-[12px] mb-[18px] text-[19px]">
        Encounter an error?
      </CardTitle>

      <Textarea
        {...register("bugReport")}
        className="h-[120px]"
        placeholder="Tell us more."
        disabled={isSubmitting}
      />
      {errors.bugReport && (
        <p className="absolute mt-1 text-sm text-red-500">{`${errors.bugReport.message}`}</p>
      )}
      <Dropzone
        disabled={isSubmitting}
        onDrop={(acceptedFiles: any) => console.log(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <div className="hover:cursor-pointer disabled:cursor-default disabled:opacity-50 border-dashed mt-[35px] flex h-[100px] rounded-md border text-sm">
            <div
              className="bg-muted w-full h-full flex justify-center items-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} {...register("bugReportFile")} />
              <p className="text-muted-foreground">Drop files here</p>
            </div>
          </div>
        )}
      </Dropzone>
      <SubmitButton
        isSubmitting={isSubmitting}
        isSubmitSuccessful={isSubmitSuccessful}
      />
    </form>
  );
}
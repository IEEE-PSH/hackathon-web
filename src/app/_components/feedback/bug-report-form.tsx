import React from "react";
import { CardTitle } from "@/app/_components/ui/card";
import { Textarea } from "@/app/_components/ui/textarea";
import { useForm } from "react-hook-form";
import SubmitButton from "@/app/_components/feedback/submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { BugReportFormSchema, TBugReportForm } from "@/app/_lib/zod-schemas/feedback";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/app/_components/ui/form"

export default function bugReportForm() {
    const form = useForm<TBugReportForm>({
        resolver:zodResolver(BugReportFormSchema)
    })

    async function onSubmit(values : TBugReportForm){
      //delay so reset doesn't rerender whole component immediately
      await new Promise((resolve) => setTimeout(resolve, 1));
      console.log(values.bug_report_message)
      form.reset({bug_report_message:""});
    }

  return (
    <Form {...form}>
    <CardTitle className="mt-[12px] mb-[18px] text-[19px]">
            Encounter an Error?
        </CardTitle>
    <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control} name="bug_report_message"
        render={({field})=>(
            <FormItem>
                <FormControl>
                <Textarea
                    {...field}
                    className="h-[250px] resize-none"
                    placeholder="Tell us more."
                    disabled={form.formState.isSubmitting}
                ></Textarea>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>
        <SubmitButton
            isSubmitting={form.formState.isSubmitting}
            isSubmitSuccessful={form.formState.isSubmitSuccessful}
        />
    </form>
</Form>
  );
}
"use client";

import { cn } from "@/app/_lib/client-utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/app/_components/ui/button";
import { Icons } from "@/app/_components/ui/icons";
import {
  Select as SelectContainer,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import React, { useState } from "react";
import { Label } from "@/app/_components/ui/label";
import FormStep from "@/app/_components/onboarding/form-step";
import {
  SupportUsFormSchema,
  type TSupportUsForm,
} from "@/app/_lib/zod-schemas/forms/onboarding/support-us";
import { Switch } from "../ui/switch";

type OnboardingSupportUsFormProps = React.HTMLAttributes<HTMLDivElement>;

export default function SupportUsForm({
  className,
  ...props
}: OnboardingSupportUsFormProps) {
  //state to render Select if help true
  const [help, setHelp] = useState(true);

  const form = useForm<TSupportUsForm>({
    resolver: zodResolver(SupportUsFormSchema),
  });

  function onSubmit(values: TSupportUsForm) {
    //dont take type_officer if help false
    console.log(values.be_officer);
    console.log(values.type_officer);
  }

  return (
    <div className={cn("grid-gap-6", className)} {...props}>
      <Form {...form}>
        <form
          id="onboardingSupportUsForm"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="be_officer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Would you like to become an IEEE officer?</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="be_officer">{help ? "Yes" : "No"}</Label>
                    <Switch
                      id="be_officer"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      defaultChecked={true}
                      onClick={() => setHelp(!help)}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {help ? (
            <FormField
              control={form.control}
              name="type_officer"
              render={({ field }) => (
                <FormItem className={help ? "visible" : "hidden"}>
                  <FormLabel>What role would you be interested in?</FormLabel>
                  <FormControl>
                    <SelectContainer
                      disabled={!help}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="administrative">
                          Administrative
                        </SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </SelectContainer>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : null}

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
}

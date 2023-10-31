"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import ReviewForm from "@/app/_components/feedback/review-form";
import BugReportForm from "@/components/feedback/bugReportForm";

//Feedback Button
export default function FeedbackFormWrapper() {
  const [toggleForm, setToggleForm] = useState(false);
  const [current, setCurrent] = useState("review");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function FormContainer() {
    return (
      <Card className="fixed bottom-[70px] right-2 p-4 h-[500px] w-[315px]">
        <Tabs defaultValue={current} className="flex flex-col">
          <TabsList className="m-auto">
            <TabsTrigger onClick={() => setCurrent("review")} value="review">
              Leave a Review
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setCurrent("bugReport")}
              value="bugReport"
            >
              Report a Bug
            </TabsTrigger>
          </TabsList>
          <TabsContent value="review">
            <ReviewForm setIsSubmitting={setIsSubmitting} />
          </TabsContent>
          <TabsContent value="bugReport">
            <BugReportForm setIsSubmitting={setIsSubmitting} />
          </TabsContent>
        </Tabs>
      </Card>
    );
  }

  return (
    <>
      <fieldset disabled={isSubmitting}>
        {toggleForm ? <FormContainer /> : null}
        <button
          onClick={() => setToggleForm(!toggleForm)}
          className="disabled:brightness-[90%] hover:cursor-pointer w-[40px] h-[40px] rounded-full bg-gray-300 fixed bottom-2 right-2"
        ></button>
      </fieldset>
    </>
  );
}

/*
          <Button
          type="submit"
          className="absolute bottom-4 right-4"
          disabled={isSubmitting}
          form={current === "review" ? "reviewForm" : "bugReportForm"}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
  */
"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Card } from "@/app/_components/ui/card";
import ReviewForm from "@/app/_components/feedback/review-form";
import BugReportForm from "@/app/_components/feedback/bug-report-form";

//Feedback Button
export default function FeedbackButton() {
  const [toggleForm, setToggleForm] = useState(false);


  return (
    <>
        {toggleForm ? <FormContainer /> : null}
        <button
          onClick={() => setToggleForm(!toggleForm)}
          className="disabled:brightness-[90%] hover:cursor-pointer w-[40px] h-[40px] rounded-full bg-gray-300 fixed bottom-2 right-2"
        ></button>
    </>
  );


}  //Feedback Container
  function FormContainer() {
      const [current, setCurrent] = useState("review");
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
            <ReviewForm />
          </TabsContent>
          <TabsContent value="bugReport">
            <BugReportForm />
          </TabsContent>
        </Tabs>
      </Card>
    );
  }
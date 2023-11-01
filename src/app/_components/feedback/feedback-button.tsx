"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { Card } from "@/app/_components/ui/card";
import ReviewForm from "@/app/_components/feedback/review-form";
import BugReportForm from "@/app/_components/feedback/bug-report-form";
import { PenSquare } from "lucide-react";
import { Button } from "../ui/button";

//Feedback Button
export default function FeedbackButton() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      {toggleForm ? <FormContainer /> : null}
      <Button size="icon" className="fixed bottom-4 right-4 rounded-full">
        <PenSquare onClick={() => setToggleForm(!toggleForm)} />
      </Button>
    </>
  );
}
//Feedback Container
function FormContainer() {
  return (
    <Card className="fixed bottom-20 right-4 h-[30rem] w-[20rem] p-4">
      <Tabs defaultValue="review" className="flex flex-col">
        <TabsList className="m-auto">
          <TabsTrigger value="review">Leave a Review</TabsTrigger>
          <TabsTrigger value="bugReport">Report a Bug</TabsTrigger>
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

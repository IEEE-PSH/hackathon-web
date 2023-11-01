import { useState } from "react";
import { CardTitle } from "@/app/_components/ui/card";
import { Textarea } from "@/app/_components/ui/textarea";
import { useForm } from "react-hook-form";
import SubmitButton from "@/app/_components/feedback/submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReviewFormSchema, TReviewForm } from "@/app/_lib/zod-schemas/feedback";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Label } from "@radix-ui/react-label";

export default function ReviewForm() {
  const [rating, setRating] = useState("");
  const form = useForm<TReviewForm>({
    resolver: zodResolver(ReviewFormSchema),
  });

  async function onSubmit(values: TReviewForm) {
    //delay so reset doesn't rerender whole component immediately
    await new Promise((resolve) => setTimeout(resolve, 1));
    console.log(values.review_message);
    console.log(values.review_rating);
    form.reset({ review_message: "" });
    setRating("");
  }

  return (
    <Form {...form}>
      <div className="flex flex-row"></div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="review_rating"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup onValueChange={field.onChange}>
                  <div className="mb-5 mt-3 flex flex-row items-center justify-center">
                    <CardTitle className="mr-auto text-[1rem]">
                      How was your experience?
                    </CardTitle>
                    <RadioGroupItem id="like" value="like" className="hidden" />
                    <FormLabel htmlFor="like">
                      <ThumbsUp
                        className={`mr-2 hover:cursor-pointer ${
                          rating === "like" && "fill-foreground"
                        }`}
                        onClick={() => {
                          setRating("like");
                        }}
                      />
                    </FormLabel>

                    <RadioGroupItem
                      id="dislike"
                      value="dislike"
                      className="hidden"
                    />
                    <FormLabel htmlFor="dislike">
                      <ThumbsDown
                        className={`mr-2 hover:cursor-pointer ${
                          rating === "dislike" && "fill-foreground"
                        }`}
                        onClick={() => {
                          setRating("dislike");
                        }}
                      />
                    </FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="review_message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-[250px] resize-none"
                  placeholder="Tell us more."
                  disabled={form.formState.isSubmitting}
                ></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton
          isSubmitting={form.formState.isSubmitting}
          isSubmitSuccessful={form.formState.isSubmitSuccessful}
        />
      </form>
    </Form>
  );
}

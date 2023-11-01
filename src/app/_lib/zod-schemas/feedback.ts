import { z } from "zod";

export const ReviewFormSchema = z.object({
  review_rating: z.enum(["like", "dislike"]),
  review_message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be less than 500 characters."),
});
export const BugReportFormSchema = z.object({
  bug_report_message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be less than 500 characters."),
});

export type TReviewForm = z.infer<typeof ReviewFormSchema>;
export type TBugReportForm = z.infer<typeof BugReportFormSchema>;

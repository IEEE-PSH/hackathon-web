import { z } from "zod";

export const ReviewFormSchema = z.object({
  review_rate: z.boolean(),
  review_message: z.string().min(10).max(500),
});
export const BugReportFormSchema = z.object({
    bug_report_message: z.string().min(10).max(500),
});

export type TReviewForm = z.infer<typeof ReviewFormSchema>;
export type TBugReportForm = z.infer<typeof BugReportFormSchema>;

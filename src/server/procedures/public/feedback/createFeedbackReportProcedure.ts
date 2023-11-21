// import { createFeedbackReport } from "@/server/dao/feedback";
// import { publicProcedure } from "@/server/trpc";
// import { z } from "zod";

// Goal A: Create a Zod Input Schema in order to validate the input
// that will be received by the API for sanitization.

// Hint: Look at `src/server/zod-schemas/announcements.ts`
// Create the Zod Input Schema Here
// Fields:
// - author_uuid: uuid ("Please Provide a Valid UUID")
// - feedback_report string [min 1 char] ("Report must at least have a single character")

// const CreateFeedbackReportSchema = z.object({
//
// })

// Create a public procedure that sanitizes the input from your zod schema
// and performs a mutation to the database which creates a feedback report
// using the function you created in the first stage.

// export default publicProcedure
// .input()
// .mutation(async ({ ctx, input }) => {}

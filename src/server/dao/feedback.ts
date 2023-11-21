import { type Database } from "@/db/drizzle";
import { app_feedback } from "@/db/drizzle/schema";
import { TRPCError } from "@trpc/server";

export async function createFeedbackReport(
  db: Database,
  feedback_author_uuid: string,
  feedback_report: string,
) {
  try {
    await db.insert(app_feedback).values({
      feedback_author_uuid,
      feedback_report,
    });
  } catch (error) {
    throw new TRPCError({
      message: "The database has encountered some issues.",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
}

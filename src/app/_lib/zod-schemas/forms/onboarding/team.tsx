import { z } from "zod";

export const CreateTeamFormSchema = z.object({
  create_team_name: z.string(),
});

export const JoinTeamFormSchema = z.object({
  team_name: z.string(),
  team_code: z.string(),
});

export type TCreateTeamForm = z.infer<typeof CreateTeamFormSchema>;
export type TJoinTeamForm = z.infer<typeof JoinTeamFormSchema>;
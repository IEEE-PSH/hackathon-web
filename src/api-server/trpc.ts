import { drizzle } from 'drizzle-orm/postgres-js'
import { initTRPC } from "@trpc/server";
import { createContext } from "./context";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString);
export const db = drizzle(client);

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;

export const publicProcedure = t.procedure.use((opts) => {
  if (!opts.ctx.req) {
    throw new Error('You are missing `req` in your call.');
  }
  
  return opts.next({
    ctx: {
      // We overwrite the context with the truthy `req`, which will also overwrite the types used in your procedure.
      req: opts.ctx.req,
    },
  });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    /**
     * Make sure to run `pnpm run introspect` to pull table schema and all types.
     *
     * We utilize Drizzle ORM for this project for type-safety and SQL Migrations
     * and to access the DB.
     *
     * See More Info Here:
     * https://orm.drizzle.team/docs/overview
     *
     * Connection string to Supabase's Postgres SQL DB
     * Connection Pool Mode (Transaction) | pgBouncer
     *
     * See Docs for more about accessing the DB:
     * https://supabase.com/docs/guides/database/connecting-to-postgres#serverless-apis
     *
     * @type {string}
     */
    DATABASE_URL: string;

    /**
     * The domain name of the generated deployment URL. Example: `*.vercel.app`.
     * The value **does not** include the protocol scheme `https://`.
     *
     * Do not set this variable in local development.
     * @type {string}
     */
    VERCEL_URL: string;

    /**
     * Supabase Anonymous Key to access Serverless APIs.
     * @see https://supabase.com/docs/guides/api/api-keys
     * 
     * This key is safe to use in a browser if you have enabled Row Level Security 
     * for your tables and configured policies.
     * @type {string}
     */
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string

    /**
     * Supabase Project URL.
     * 
     * A RESTful endpoint for querying and managing your database.
     * @type {string}
     */
    NEXT_PUBLIC_SUPABASE_URL: string
  }
}

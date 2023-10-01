namespace NodeJS {
  interface ProcessEnv {

    /**
     *
     * URL generated by Vercel Preview Deployment
     * Triggered by any code push on any branch within repo.
     *
     * Used in baseURL attribute of `playwright.config.ts` 
     * to determine endpoint for running E2E Tests.
     * @type {string}
     */
    PLAYWRIGHT_TEST_BASE_URL: string

    /**
     * 
     * Clerk Authentication Publishable Key
     * Meant to be used in front-end code
     * @type {string}
     */
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string

    /**
     * Clerk Secret Key
     *
     * Meant to ONLY used in BACK-END code
     * Please notify repository owners if leaked for key refresh.
     * @type {string}
     */
    CLERK_SECRET_KEY: string

    /**
     * Clerk Authentication Sign In URL
     * Specifies to Clerk where the sign-in pages / route exists
     * @type {string}
     */
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: string

    /**
     * Clerk Authentication Sign Up URL
     * Specifies to Clerk where the sign-up pages / route exists
     * @type {string}
     */
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: string

    /**
     *
     * Clerk Authentication Redirect URL After Sign-In
     * Redirects user to the specified path after sign in
     * @type {string}
     */
    NEXT_PUBLIC_AFTER_SIGN_IN_URL: string

    /**
     *
     * Clerk Authentication Redirect URL After Sign-Up
     * Redirects user to the specified path after sign up
     * @type {string}
     */
    NEXT_PUBLIC_AFTER_SIGN_UP_URL: string
  }
}

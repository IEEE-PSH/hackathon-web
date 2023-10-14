import { defineConfig } from "cypress";

import { plugins } from "cypress-social-logins";
const googleSocialLogin = plugins.GoogleSocialLogin;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
  env: {
    EMAIL_KEY: "922133c6-4549-4ec6-af28-ac951b0ef45f",
    EMAIL_NAMESPACE: "q5m8r",
  },
});

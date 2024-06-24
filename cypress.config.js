const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: '/todo',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

import { defineConfig } from 'cypress'
import clean from './cypress/tasks/clean'
import createTestBook from './cypress/tasks/createTestBook'

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('task', {
        clean,
        createTestBook,
      })
    },
  },
})

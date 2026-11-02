// The screens' tests: Playwright Test, with axe, against the app served
// with no build (scripts/serve.mjs). Chromium is the Nix store's, as for the screenshots, or
// Playwright's own where there is none (CI).
import { defineConfig } from '@playwright/test'
import { execSync } from 'node:child_process'

const executablePath =
  process.env.CHROMIUM ||
  execSync('command -v chromium || ls /nix/store/*chromium*/bin/chromium | head -1', {
    shell: '/bin/sh'
  })
    .toString()
    .trim()

// Each run serves the app on its own port (E2E_PORT), so parallel runs do not meet.
const port = Number(process.env.E2E_PORT ?? 9994)

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: `http://127.0.0.1:${port}/eruko/`,
    // The service worker would answer for the app's files, out of the tests' reach: only the
    // offline test lets it run (e2e/offline.spec.mjs).
    serviceWorkers: 'block',
    launchOptions: { ...(executablePath && { executablePath }), args: ['--no-sandbox'] }
  },
  webServer: {
    command: `node scripts/serve.mjs ${port}`,
    // No shared record: each test's browser keeps its own, and none reaches the learner's.
    env: { ERUKO_DATA: 'off' },
    url: `http://127.0.0.1:${port}/eruko/`,
    reuseExistingServer: false
  }
})

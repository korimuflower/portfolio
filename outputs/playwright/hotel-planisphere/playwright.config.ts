import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://hotel-example-site.takeyaqa.dev',
    trace: 'on-first-retry',
    video: 'retain-on-failure'
  },

  reporter: [['html', { open: 'on-failure',outputFolder: 'playwright-report'}]],

});

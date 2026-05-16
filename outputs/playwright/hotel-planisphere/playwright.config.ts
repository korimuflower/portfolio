import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://hotel-example-site.takeyaqa.dev/ja/',
    trace: 'on-first-retry',
  },
});

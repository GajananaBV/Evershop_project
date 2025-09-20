import { test, expect } from '@playwright/test';
import * as path from 'path';


test.describe('Playwright gajanan Practice Tests', () => {

const baseURL = 'http://localhost:4000/gajanan.html';   

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

// Locator by Role
test("locator by Role", async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Playwright Locator Training' })).toBeVisible();
  await page.close();
});

});
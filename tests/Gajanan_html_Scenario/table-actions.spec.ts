import { test, expect } from "@playwright/test";

test("Edit / Delete / Details in table", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  // Expand details for row 1
  await page.click('[data-testid="details-1"]');
  await expect(page.locator("#rowDetails")).toBeVisible();

  // Delete row 2 → modal opens
  await page.click('[data-testid="delete-2"]');
  await expect(page.locator("#modalBackdrop")).toBeVisible();
});
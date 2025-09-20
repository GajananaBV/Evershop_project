import { test, expect } from "@playwright/test";

test("Modal opens and closes", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  await page.click('[data-testid="btn-open-modal"]');
  await expect(page.locator("#modalBackdrop")).toBeVisible();

  await page.click("#modalCancel");
  await expect(page.locator("#modalBackdrop")).toHaveClass(/hidden/);
});
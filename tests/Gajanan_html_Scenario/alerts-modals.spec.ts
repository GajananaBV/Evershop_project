import { test, expect } from "@playwright/test";

test("Handle JS alerts", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  page.once("dialog", async (dialog) => {
    console.log("Alert message:", dialog.message());
    await dialog.accept("Playwright input");
  });

  await page.click("#alertBtn");
  await expect(page.locator("#alertResult")).toHaveText(/Playwright input/);
  await page.close();
});
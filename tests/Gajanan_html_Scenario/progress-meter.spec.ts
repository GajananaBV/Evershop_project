import { test, expect } from "@playwright/test";

test("Check progress and meter values", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  await expect(page.locator("#progressDemo")).toHaveAttribute("value", "30");
  await expect(page.locator("#meterDemo")).toHaveAttribute("value", "7");
});
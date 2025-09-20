import { test, expect } from "@playwright/test";

test.only("handle drag and drop", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  const source = page.locator("#dragBox");
  const target = page.locator("#dropZone");

  // Perform drag and drop
  await source.dragTo(target);

  // Verify the drop result text
  await expect(page.locator("#dropResult")).toHaveText("Dropped successfully!");
});

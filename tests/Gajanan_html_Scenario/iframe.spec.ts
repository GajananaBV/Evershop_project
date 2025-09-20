import { test, expect } from "@playwright/test";

test.describe("Iframe Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4000/gajanan.html");
  });

  test("Verify iframe content", async ({ page }) => {
    const frame = page.frameLocator("#demoFrame");
    await expect(frame.getByText("This is inside an iframe")).toBeVisible();
  });
});
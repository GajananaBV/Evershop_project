import { test, expect } from "@playwright/test";

test.describe("Search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4000/gajanan.html");
  });

  test("Filter table rows using search box", async ({ page }) => {
    await page.getByPlaceholder("Search students...").fill("Alice");
    await expect(page.getByRole("row", { name: /Alice/ })).toBeVisible();

    await page.getByPlaceholder("Search students...").fill("zzz");
    await expect(page.getByRole("row")).toHaveCount(1);
  });
});

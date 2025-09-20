import { test, expect } from "@playwright/test";

test.describe("Header & Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4000/gajanan.html");
  });

  test("Verify Docs link & Download button", async ({ page }) => {
    const docsLink = page.getByRole("link", { name: "Playwright Docs" });
    await expect(docsLink).toHaveAttribute("href", "https://playwright.dev");

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("button", { name: "Download Demo" }).click(),
    ]);
    expect(await download.suggestedFilename()).toContain("demo");
  });
});

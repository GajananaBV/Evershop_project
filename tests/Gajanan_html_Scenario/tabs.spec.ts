import { test, expect } from "@playwright/test";

test.describe("Tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4000/gajanan.html");
  });

  test("Switch between tabs", async ({ page }) => {
    await expect(page.getByRole("tabpanel")).toContainText("Students");

    await page.getByRole("tab", { name: "Interactions" }).click();
    await expect(page.getByRole("tabpanel")).toContainText("Hover");

    await page.getByRole("tab", { name: "Advanced" }).click();
    await expect(page.getByRole("tabpanel")).toContainText("Iframe");

    await page.getByRole("tab", { name: "Students" }).click();
    await expect(page.getByRole("table")).toBeVisible();
  });
});

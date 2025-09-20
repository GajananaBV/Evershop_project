import test, { expect } from "@playwright/test";

test("handle single popup", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#popup1Btn")
  ]);

  expect(popup).toHaveURL("https://example.com/");
  expect(popup).toHaveTitle("Example Domain");
});

import test, { expect } from "playwright/test";

test.only("Handle frames  operations ", async ({ page }) => {
  const baseURL = "http://localhost:4000/gajanan.html";

  await page.goto(baseURL);
  const frame = page.frameLocator('[data-testid="iframe-demo"]');
  await frame
    .getByRole("button", { name: "Click inside iframe" })
    .click();
    await expect(frame.getByText("Iframe Button Clicked!")).toBeVisible();
    await page.close();
});

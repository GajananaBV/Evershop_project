import test, { expect } from "@playwright/test";

test("Browser popup blockers prevent multiple window.open in the same click---->Multiple Popup", async ({ page, context }) => {
  await page.goto("http://localhost:4000/gajanan.html");
  const [popup1, popup2] = await Promise.all([
    context.waitForEvent("page"), //fist Popup
    context.waitForEvent("page"), //Second Popup
    page.click("#multiPopupBtn"), //click on button
  ]);

  popup1.waitForLoadState();
  popup2.waitForLoadState();

  console.log("popup1 url: " + popup1.url);
  console.log("popup url: " + popup2.url);

  await expect(popup1).toHaveURL("https://example.com/");
  await expect(popup2).toHaveURL("https://www.wikipedia.org/");

  await popup2.locator("#searchInput").fill("Gajanan");
  await page.getByRole("button", { name: "Search" }).click();
  await expect(popup2).toHaveTitle("Gajanan");
});

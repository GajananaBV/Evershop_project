import test, { expect } from "@playwright/test";

test("multiple popup handling ", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");
  const [popup1] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#popup1Btn"),
  ]);

  expect(popup1).toHaveURL("https://example.com/");
  expect(popup1).toHaveTitle("Example Domain");

  const [popup2] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#popup2Btn"),
  ]);
  await expect(popup2).toHaveURL("https://www.wikipedia.org/");
 console.log("✅ Popup1 URL:", await popup1.url());
  console.log("✅ Popup2 URL:", await popup2.url());

  // Example interaction inside popup2
  await popup2.locator("#searchInput").fill("Gajanan");
  await popup2.locator("button[type='submit']").click();
});

import { test } from "@playwright/test";
import { MakeMyTripPage } from "../pages/makemytrip.page";

test("flight booking with login modal handling", async ({ page }) => {
  await page.goto("https://www.makemytrip.com/");

  const modal = page.locator('section[data-cy="CommonModal_2"]');
  await modal.waitFor({ state: "visible" });

  await modal.getByText("Personal Account").click();
  await modal.getByText("MyBiz Account").click();
  await modal.getByText("Personal Account").click();

  await modal
    .getByRole("textbox", { name: "Enter Mobile Number", exact: true })
    .click();
  await modal
    .getByRole("textbox", { name: "Enter Mobile Number", exact: true })
    .fill("8888888888");
  await modal.getByRole("button", { name: "Continue" }).click();

  await modal.getByText("MyBiz Account").click();

  await modal
    .getByRole("textbox", { name: "Enter your work email id" })
    .fill("test@example.com");


  await page.mouse.click(0, 0);
  await modal.waitFor({ state: "detached" });
  page.close();
});

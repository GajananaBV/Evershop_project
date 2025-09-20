import { test } from "@playwright/test";
import { MakeMyTripPage } from "../pages/makemytrip.page";

test("flight booking with login modal handling", async ({ page }) => {
  const makemytripPage = new MakeMyTripPage(page);

  await makemytripPage.navigateToHomePage();
  await makemytripPage.handleLoginModalFlow();

  await makemytripPage.closePage();
});

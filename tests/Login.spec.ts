import { test, expect } from "@playwright/test";
import "dotenv/config";

test("Login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.locator("#login2").click();

  await page.locator("#loginusername").fill(process.env.USERNAME as string);
  await page.locator("#loginpassword").fill(process.env.PASSWORD as string);

  await page.getByRole("button", { name: "Log in" }).click();

  await expect(page.getByText("Welcome vnovacki")).toBeVisible();
});

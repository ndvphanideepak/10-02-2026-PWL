import  {test,expect} from '@playwright/test';

test("Should load homePage with correct tile",async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
     await expect(page.locator("//div[@class='login_logo']")).toHaveText("Swag Labs");
     await page.locator("#user-name").type("standard_user");
     await page.locator("#password").type("secret_sauce");
     await page.locator("#login-button").click();
     await expect(page.locator("//span[@class='title']")).toHaveText("Products");
    })
import {test,expect} from "@playwright/test"
test.use({permissions:[] //to block page location permission notification
});
test('Assignment 3 Create Individuals',async({page})=>{
    //Login to Salesforce page
 await page.goto("https://login.salesforce.com ")
 await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') 
 await page.locator('#password').fill('TestLeaf@2025')
 await page.locator('#Login').first().click()
 //click on toggle menu button
 await page.getByRole('button',{name:'App Launcher'}).click()
 //click View All
 await page.locator(`[aria-label='View All Applications']`).click()
 await page.waitForTimeout(2000)
 //click on Individuals
 await page.locator(`//p[text()='Individuals']`).click()
 //click on drop dwon of Individuals 
 await page.getByRole('button',{name:'Individuals List'}).click()
 //click New Individual
 await page.getByText('New Individual').click()
 //enter Lastname
await page.getByPlaceholder('Last Name').fill('Sundar')
//click Save
await page.getByRole('button',{name:'Save'}).first().click()
//verify Individuals Name
await expect(page.locator(`//span[@class='uiOutputText']`)).toHaveText('Sundar')

})

// Assignment: 3 Create Individuals 
// Test Steps:  
// 1. Login to https://login.salesforce.com 
// 2. Click on the toggle menu button from the left corner 
// 3. Click View All and click Individuals from App Launcher 
// 4. Click on the Dropdown icon in the Individuals tab 
// 5. Click on New Individual 
// 6. Enter the Last Name 
// 7. Click save and verify Individuals Name 
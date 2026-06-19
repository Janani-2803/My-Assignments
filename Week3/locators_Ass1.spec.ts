import {test,expect} from "@playwright/test"
test.use({permissions:[] //to block page location permission notification
});
test('Assignment 1 Create Lead',async({page})=>{
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
 //click Sales
 await page.locator(`//p[text()='Sales']`).click()
 //click on Leads tab
 await page.locator(`//span[text()='Leads']`).first().click()
 await page.waitForTimeout(2000)
 //click on New
 await page.getByRole('button',{name:'New'}).click()
 //click on Salutation dropdwon
 await page.locator(`[name='salutation']`).click()
 //select salutation as Ms.
 await page.getByText('Ms.').click()
 //Enter lastName
 await page.getByPlaceholder('Last Name').fill('SM')
 //enter company name
 await page.getByRole('textbox',{name:'Company'}).first().fill('TestLeaf')
 //click save
 await page.getByRole('button',{name:'Save'}).first().click()
 //verify leads name created
 await expect(page.locator('lightning-formatted-name')).toHaveText('Ms. SM')
})

// Assignment: 1 Create Lead 
// 1. Login to https://login.salesforce.com 
// 2. Click on toggle menu button from the left corner 
// 3. Click view All and click Sales from App Launcher 
// 4. Click on Leads tab  
// 5. Click on New button 
// 6. Select Salutation dropdown 
// 7. Enter the Last Name 
// 8. Enter the Company Name  
// 9. Click Save and Verify Leads name created
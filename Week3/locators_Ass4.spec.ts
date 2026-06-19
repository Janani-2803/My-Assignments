import {test,expect} from "@playwright/test"
test.use({permissions:[] //to block page location permission notification
});
test('Assignment 4 Edit Individuals',async({page})=>{
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
 //click on Individuals tab
 await page.locator(`//a[@class='slds-context-bar__label-action dndItem']/span[text()='Individuals']`).click()
 //search the last name
 await page.getByRole('searchbox',{name:'Search this list'}).fill('Sundar')
 await page.keyboard.press('Enter')
 //Select dropdwon to edit
 await page.locator(`//tr[@data-row-number='1']/td[6]`).click()
 await page.locator(`a[title='Edit']`).click()
 //click on Salutation
 await page.getByText('--None--').first().click()
//Enter Salutation as Mr.
  await page.getByText('Mr.').click()
  //Enter First Name
  await page.getByPlaceholder('First Name').fill('Kumaran')
  //click Save
  await page.locator(`//span[text()='Save']`).click()
  //verify First name
  await expect(page.getByRole('link',{name:'Kumaran Sundar'})).toHaveText(/Kumaran/)


})

// Assignment: 4 Edit Individuals 
// Test Steps: 
// 1. Login to https://login.salesforce.com 
// 2. Click on the toggle menu button from the left corner 
// 3. Click View All and click Individuals from App Launcher  
// 4. Click on the Individuals tab  
// 5. Search the Individuals last name 
// 6. Click on the Dropdown icon and Select Edit 
// 7. Select Salutation as 'Mr' 
// 8. Now enter the first name 
// 9. Click on Save and Verify the first name 
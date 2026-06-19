import {test,expect} from "@playwright/test"
test("Assignment 2 Edit Lead",async({page})=>{
    //Login to leaftaps platform 
    await page.goto("https://leaftaps.com/opentaps/control/login")


    //enter username,password and login
    await page.getByRole('textbox',{name:'Username'}).fill('democsr')
    await page.getByRole('textbox',{name: 'Password'}).fill('crmsfa')
    await page.getByRole('button',{name: 'Login'}).click()
    //click on CRM/SFA Link
    await page.locator(`//a[contains(text(),'CRM')]`).click()
    //click on Leads tab
    await page.locator(`//a[contains(text(),'Leads')]`).click()
    //click on Create Lead
    await page.locator(`//a[text()='Create Lead']`).click()
    //enter the company name,first name,last name
    await page.locator('.inputBox').first().fill('TestLeaf')
    await page.locator('#createLeadForm_firstName').fill('Janani')
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill('SM')
    //click on create lead
    await page.locator(`.smallSubmit`).click()
    //click on edit
    await page.getByRole('link',{name:'Edit'}).click()
    //change the company name
    await page.locator('.inputBox').first().fill('ABC Company')
    //click update
    await page.getByRole('button',{name:'Update'}).click()

})

// Assignment: 2 Edit Lead 
// http://leaftaps.com/opentaps/control/main    
// 1. Launch the browser 
// 2. Enter the username 
// 3. Enter the password 
// 4. Click Login 
// 5. Click CRM/SFA link 
// 6. Click Leads link 
// 7. Click on Create Lead 
// 8. Enter company name 
// 9. Enter first name 
// 10.Enter last name 
// 11.Click on Create Lead button   
// 12.Click Edit 
// 13.Change the company name 
// 14.Click Update
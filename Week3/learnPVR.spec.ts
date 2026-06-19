import {test,expect} from "@playwright/test"
test.use({permissions:[] //to block page location permission notification
});
test("Learn PVR cinema ticket booking",async({page})=>{

    //1.Navigate to PVR cinemas page
await page.goto("https://www.pvrcinemas.com/.")
//2.Select the required city
//await page.getByText('Chennai').first().click()
await page.locator(`//span[text()='Chennai']`).first().click()
//Clicked on cinema option
await page.locator(`//span[@class='cinemas-inactive']`).click()
//Select cinema
await page.getByRole('button',{name: 'Select Cinema'}).click()
//select required cinema
await page.getByText('PVR AEROHUB Chennai').click()
//select date
await page.getByText('Sun, 21 Jun').click()
await page.waitForTimeout(1000)
//select movie 
await page.locator(`//span[text()='Select Movie']`).click()
await page.locator(`//li[@class='p-dropdown-item']/span[text()='BLAST']`).click()
//select show time
await page.getByText('12:30 PM').click()
//click Submit
await page.locator(`//button[@type='submit']/span[text()='Book']`).click()
//handle popup
await page.getByRole('button',{name:'Accept'}).click()
//select seatn
await page.locator(`//span[@id='PE.PRIME|C:7']`).click()
await page.locator(`//span[@id='PE.PRIME|C:6']`).click()
//verify selected seat C6 and C7
await expect(page.locator(`//div[@class='seat-number']/p[text()='C6']`)).toHaveText('C6')
await expect(page.locator(`//div[@class='seat-number']/p[text()='C7']`)).toHaveText('C7')
//verify the total ticket amount is displayed
await expect(page.locator(`.grand-prices h6`)).toHaveText('436.04')
//to check page title
await expect(page).toHaveTitle('PVR Cinemas')
//click on proceed
await page.getByRole('button',{name:'Proceed'}).click()
})
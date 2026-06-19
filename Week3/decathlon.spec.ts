import {test,expect} from "@playwright/test"
test("Learn Decathlon item purchase",async({page})=>{
    //Navigate to pvr cinemas page
    await page.goto("https://www.decathlon.in/")
    //To verify user navigated to Decathlon home page
    await expect(page.getByRole('link',{name: 'Decathlon Home'})).toBeVisible()
    //Click on Search icon
    await page.locator(`input[type='search']`).click()
    //Verify search input field is enabled
    await expect(page.locator(`input[type='search']`)).toBeEnabled()
    //enter shoes inside search bar
    await page.locator(`input[type='search']`).fill('shoes')
    //press enter key
    await page.keyboard.press('Enter')
    //capture and print page title
    await page.waitForTimeout(1000)
    const pageTitle=await page.title()
    console.log(`The page title after entering shoes is `+pageTitle)
    await expect(page).toHaveTitle('Search | shoes')
    //click on running category filter
    await page.locator(`//span[text()='Sport']`).click()
    await page.locator(`[data-test-id='filter-checkbox-sport_pratice_en-Running']`).click()
    //click on Men gender filter
    await page.locator(`//span[text()='Gender']`).click()
    await page.locator(`[data-test-id='filter-checkbox-gender_id_en-MEN']`).click()
    //select shoe size
    await page.locator(`//span[text()='Size']`).click()
    await page.getByRole('checkbox',{name:'Uk 10.5 - eu 45 3'}).click()
    //select sorting option
    await page.locator(`[data-test-id='sort-bar-desktop:chevron-down-icon']`).click()
    //select Price High to Low
    await page.getByRole('option',{name: 'Price (high → low)'}).click()
    //select the first displayed shoe
    await page.getByRole('img', { name:'Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Blue' }).first().click()
    await page.waitForTimeout(2000)
    await page.locator(`//img[contains(@src,'p2933961')]`).last().click()
    //select size UK 10.5
    await page.locator(`[data-test-id='pdp-size-option-button-UK 10.5 - EU 45']`).click()
    //select Add to Cart
    await page.getByRole('button',{name:'Add to cart'}).click()
    //click on cart option
    await page.waitForTimeout(2000)
    await page.locator(`//span[text()='Cart']`).click()
    //fetch total cart value
    const cartValue=await page.locator(`//div[@data-test-id='cart:cart-checkout-total-cart-value']/p`).textContent()
    console.log("The bill value is "+cartValue)

    
})
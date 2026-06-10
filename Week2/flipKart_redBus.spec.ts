 import test, {chromium, firefox} from "@playwright/test";

 //To launch Red Bus in Edge
 test("Launching Red Bus using edge browser",async() => {
    const browser = await chromium.launch({channel: 'msedge',headless: false})
    //creating new browser context
    const context = await browser.newContext()
    //create a new page
    const page = await context.newPage()
    //Launch the Red Bus URL
    await page.goto("https://www.redbus.in")
    //get the page title
    const titleOfPage = await page.title()
    //get the page URL
    const pageUrl = await page.url()
    //Print the page title
    console.log("The title of page is "+titleOfPage)
    //print the page URL
    console.log("THe URL of page is "+pageUrl)
});

test("Launching Flipkart using Firefox",async({},testInfo)=>{
    testInfo.setTimeout(40000)
    const browser1=await firefox.launch({headless: false})
    //Launch the new context
    const context2 = await browser1.newContext()
    //launch the new page
    const page1=await context2.newPage()
    //Launch the FlipKart URL
    await page1.goto("https://www.flipkart.com")
    //to get the page title
    const titleOfPage2 = await page1.title()
    //to get the page URL
    const pageUrl2 = await page1.url()
    //Print the page title
    console.log("The title of page is "+titleOfPage2)
    //print the page URL
    console.log("THe URL of page is "+pageUrl2)
});

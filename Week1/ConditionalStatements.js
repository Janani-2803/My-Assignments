function launchBrowser(browserName)
{
    if(browserName=="Chrome")
        console.log("Launch")
    else
        console.log("No Launch")
}

function runTests(testType)
{

    switch (testType)
    {
        case "smoke":
            console.log("This is smoke test")
            break;
        case "sanity":
            console.log("This is sanity test")
            break;
        case "regression":
            console.log("This is regression test")
            break;
        default:
            console.log("This is smoke test")
            break;
    }

}
launchBrowser("Chrome")
runTests("sanity")
runTests("regression")
runTests("outoftest")
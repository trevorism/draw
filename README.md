# draw Web app that..
![Jenkins](https://img.shields.io/jenkins/build/http/trevorism-build.eastus.cloudapp.azure.com/draw)
![Jenkins Coverage](https://img.shields.io/jenkins/coverage/jacoco/http/trevorism-build.eastus.cloudapp.azure.com/draw)
![GitHub last commit](https://img.shields.io/github/last-commit/trevorism/draw)
![GitHub language count](https://img.shields.io/github/languages/count/trevorism/draw)
![GitHub top language](https://img.shields.io/github/languages/top/trevorism/draw)


Check out this [puppeteer](https://try-puppeteer.appspot.com/) code:

```
const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('https://images.google.com/?gws_rd=ssl');

console.log(await page.content());
page.click(".gLFyf");
page.type(".gLFyf","Smashing magazine");  
await page.waitFor(4000);
page.click(".Tg7LZd");

await page.waitFor(4000);
await page.screenshot({path: 'screenshot.png'});
await browser.close();
```
import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import fs from "fs-extra";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
  const scenarioName = pickle.name + pickle.id;
  context = await browser.newContext({
    recordVideo: {
      dir: "test-results/videos",
    },
  });
  await context.tracing.start({
    name: scenarioName,
    title: pickle.name,
    sources: true,
    screenshots: true,
    snapshots: true,
  });
  const page = await context.newPage();
  fixture.page = page;
  fixture.context = context;
  fixture.logger = createLogger(options(pickle.name));
});

After(async function ({ pickle, result }) {
  let videoPath: string;
  let img: Buffer;
  if (result?.status == Status.FAILED) {
    img = await fixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
    // @ts-ignore
    videoPath = await fixture.page.video().path();
  }
  await fixture.page.close();
  await context.close();
  if (result?.status == Status.FAILED) {
    // @ts-ignore
    await this.attach(img, "image/png");
    await this.attach(
      // @ts-ignore
      fs.readFileSync(videoPath),
      "video/webm"
    );
  }
});

AfterAll(async function () {
  await browser.close();
});

import { bundle } from "@remotion/bundler";
import { openBrowser, renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const serveUrl = await bundle({ entryPoint: path.resolve(dirname, "../src/index.ts") });
const browser = await openBrowser("chrome", {
  browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/bin/chromium",
  chromiumOptions: { args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] },
  chromeMode: "chrome-for-testing",
});
const composition = await selectComposition({ serveUrl, id: "solar-system", puppeteerInstance: browser });
await renderMedia({
  composition,
  serveUrl,
  codec: "h264",
  outputLocation: "/tmp/solar-system-stats.mp4",
  puppeteerInstance: browser,
  muted: true,
  concurrency: 1,
  crf: 24,
});
await browser.close({ silent: false });
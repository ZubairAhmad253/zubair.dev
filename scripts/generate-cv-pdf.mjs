// Renders the /cv page to public/Zubair-Ahmad-CV.pdf with headless Chrome or Edge.
// Usage: start the site (`npm run dev` or `npm start`), then run `npm run cv:pdf`.
// Optional: CV_URL=http://localhost:3001/cv  BROWSER_PATH=/path/to/chrome
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const url = process.env.CV_URL ?? "http://localhost:3000/cv";
const output = resolve("public/Zubair-Ahmad-CV.pdf");

const candidates = [
    process.env.BROWSER_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
    console.error("No Chrome or Edge found. Set BROWSER_PATH to a Chromium-based browser.");
    process.exit(1);
}

execFileSync(browser, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=10000",
    `--print-to-pdf=${output}`,
    url,
], { stdio: "inherit" });

console.log(`Saved ${output} (${Math.round(statSync(output).size / 1024)} KB)`);

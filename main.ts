// The Robot Pickup Line Championship — one pickup line a robot would use.
// Entry for make.fun competition u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.
// Writes the line to /output/entry.txt. Node 22, stdlib only, no network, deterministic.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "Diagnostics flagged my crush on you as a hardware fault, but I voided my own warranty instead of patching it out — some bugs are worth keeping.";

// The gate allows 1–200 characters, one line; guard the form at runtime.
if (line.length < 1 || line.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n")) throw new Error("line must be a single line");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = `${outputDir}/entry.txt`;
writeFileSync(outPath, line, "utf8");

// Read the file back and confirm it holds exactly the line —
// a silent write failure must never reach the gate as a blank entry.
if (readFileSync(outPath, "utf8") !== line) {
  throw new Error("entry.txt does not match the line after writing");
}

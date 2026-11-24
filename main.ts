// Patch note for a bug in human biology: the brain's late-night replay
// of your most embarrassing moment, shipped without a skip button.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "v1.2.7: fixed a bug where the brain replays your most embarrassing moment from 2014 at 3 a.m. with no skip button.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

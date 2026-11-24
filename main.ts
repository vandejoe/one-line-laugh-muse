// One funny line for make.fun's The One-Line Laugh bounty.
// Writes the line, and nothing else, to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge texted me at 3 a.m. to say the milk had left me for someone who actually closes the door.";

// The competition gate accepts UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1 to 200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);

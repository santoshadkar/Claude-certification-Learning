import { readFileSync } from "fs";

const file = process.argv[2];
const content = readFileSync(file, "utf-8");
const blocks = content.split(/\n  \{\n/).slice(1);
let correctLens = [];
let incorrectLens = [];
let longestIsCorrect = 0;
let total = 0;
const offenders = [];

for (const block of blocks) {
  const idMatch = block.match(/id: "([a-z0-9-]+)"/);
  const optMatch = block.match(/options: \[([\s\S]*?)\n\s*\],/);
  const correctMatch = block.match(/correctOptionIds: \[([^\]]+)\]/);
  if (!optMatch || !correctMatch) continue;
  const correctIds = correctMatch[1].match(/"([A-F])"/g).map((s) => s.replace(/"/g, ""));
  const optionRegex = /\{ id: "([A-F])", text: "((?:[^"\\]|\\.)*)" \}/g;
  const optionMatches = [...optMatch[1].matchAll(optionRegex)];
  if (optionMatches.length === 0) continue;
  total++;
  const lens = optionMatches.map((m) => ({ id: m[1], len: m[2].length }));
  const maxLen = Math.max(...lens.map((l) => l.len));
  const correctLensThis = lens.filter((l) => correctIds.includes(l.id)).map((l) => l.len);
  correctLens.push(...correctLensThis);
  incorrectLens.push(...lens.filter((l) => !correctIds.includes(l.id)).map((l) => l.len));
  if (Math.max(...correctLensThis) === maxLen) {
    longestIsCorrect++;
    offenders.push({ id: idMatch ? idMatch[1] : "?", lens, correctIds });
  }
}
const avg = (arr) => (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
console.log(file);
console.log("  avg correct:", avg(correctLens), "avg incorrect:", avg(incorrectLens));
console.log("  correct-is-longest:", longestIsCorrect + "/" + total);
console.log("  offenders:");
for (const o of offenders) {
  console.log("   ", o.id, JSON.stringify(o.lens), "correct=" + o.correctIds.join(","));
}

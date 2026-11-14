// food-picture-01 entry (Node 22, standard library only).
//
// The picture is the entry.png shipped beside this file: a spoon lifting a
// chunk of beef rendang, thick glossy sauce dripping back into a bowl of
// rendang over steamed rice, steam curling in warm window light. The program
// copies that picture to the output path the grader reads.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

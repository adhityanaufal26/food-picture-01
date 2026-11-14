// food-picture-01 v3: beef rendang, fork-lifted chunk with glossy sauce dripping
// back into a black bowl (dark wood, warm bokeh, steam). Node 22, stdlib only.
// The picture is the entry.png beside this file; the program copies it to the
// output directory make.fun grades. Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels;
// this image is a 1024x1024 JPEG of 247,872 bytes, so it fits with room to spare.
// The judge sees exactly the bytes copied: no text is overlaid on the picture,
// and the copy is byte-for-byte, so two runs write identical output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));

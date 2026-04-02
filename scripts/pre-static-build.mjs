/**
 * Prepare the project for static export (GitHub Pages).
 * Removes server-only routes that can't be statically rendered.
 */
import { rmSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const serverOnlyPaths = [
  'app/api/search',
];

for (const rel of serverOnlyPaths) {
  const abs = resolve(root, rel);
  if (existsSync(abs)) {
    rmSync(abs, { recursive: true });
    console.log(`[pre-static-build] removed ${rel}`);
  }
}

console.log('[pre-static-build] ready for static export');

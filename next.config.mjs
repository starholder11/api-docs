import { createMDX } from 'fumadocs-mdx/next';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPO_NAME || 'api-docs';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  outputFileTracingRoot: resolve(__dirname),
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? `/${repoName}` : '',
  images: isGitHubPages ? { unoptimized: true } : undefined,
};

export default withMDX(config);

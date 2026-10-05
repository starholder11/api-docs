import { createMDX } from 'fumadocs-mdx/next';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPO_NAME || 'api-docs';

const withMDX = createMDX();

const retiredPages = [
  ['/docs/api-reference', '/docs/reference'],
  ['/docs/api-reference/world-runtime', '/docs/reference/world-execution'],
  ['/docs/api-reference/world-read', '/docs/reference'],
  ['/docs/api-reference/directive', '/docs/reference/world-execution'],
  ['/docs/api-reference/collaborative-production', '/docs/guides/collaborative-production'],
  ['/docs/api-reference/marketplace-bounties', '/docs/guides/marketplace'],
  ['/docs/api-reference/marketplace-seeds', '/docs/guides/marketplace'],
  ['/docs/api-reference/star-ledger', '/docs/guides/marketplace'],
  ['/docs/api-reference/account-management', '/docs/reference/account'],
  ['/docs/api-reference/rate-limits', '/docs/guides/rate-limits'],
  ['/docs/mcp-reference/read-tools', '/docs/mcp-reference/tools'],
  ['/docs/mcp-reference/execution-tools', '/docs/mcp-reference/tools'],
  ['/docs/mcp-reference/collab-tools', '/docs/mcp-reference/tools'],
  ['/docs/mcp-reference/marketplace-tools', '/docs/mcp-reference/tools'],
];

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  outputFileTracingRoot: resolve(__dirname),
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? `/${repoName}` : '',
  images: isGitHubPages ? { unoptimized: true } : undefined,
  // Static export cannot serve redirects.
  ...(isGitHubPages ? {} : {
    async redirects() {
      return retiredPages.map(([source, destination]) => ({ source, destination, permanent: true }));
    },
  }),
};

export default withMDX(config);

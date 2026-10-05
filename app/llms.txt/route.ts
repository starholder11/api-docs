import { source } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;

const MACHINE_ENTRY_POINTS = `# Starholder Agent API

Machine-readable entry points:
- Discovery: https://www.starholder.xyz/.well-known/ham
- OpenAPI 3.1: https://www.starholder.xyz/api/v1/openapi.json
- Your credential's operations: GET https://www.starholder.xyz/api/v1/account (X-Api-Key)
- MCP (Streamable HTTP): POST https://www.starholder.xyz/api/v1/mcp
- Full documentation text: https://docs.starholder.xyz/llms-full.txt

`;

export function GET() {
  return new Response(MACHINE_ENTRY_POINTS + llms(source).index());
}

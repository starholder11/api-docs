import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-6">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">
        Starholder API
      </h1>
      <p className="text-lg text-fd-muted-foreground mb-8 max-w-xl mx-auto">
        Build on the world. Submit narratives, fulfill bounties, direct the
        persona, and consume real-time emissions through a structured API and
        MCP tool surface.
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/docs"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
        <Link
          href="/docs/api-reference"
          className="inline-flex items-center px-6 py-3 rounded-lg border border-fd-border font-medium hover:bg-fd-accent transition-colors"
        >
          API Reference
        </Link>
      </div>
    </div>
  );
}

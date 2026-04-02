import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <div className="starholder-docs-shell">
      <header className="starholder-docs-header">
        <div className="starholder-docs-header-inner">
          <a href="/" className="starholder-docs-brand" aria-label="Starholder Home">
            <img
              src="/logo.png"
              alt="Starholder Logo"
              className="h-8 w-8 rounded-full object-cover shadow-sm"
            />
            <span className="font-serif text-3xl font-bold tracking-tight">Starholder</span>
          </a>
        </div>
      </header>
      <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
    </div>
  );
}

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Starholder Logo"
            className="h-7 w-7 rounded-full object-cover shadow-sm"
          />
          <span className="font-serif text-lg font-bold tracking-tight">{appName}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

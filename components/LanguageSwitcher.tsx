'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const labels: Record<string, string> = { ar: 'عربي', en: 'EN' };

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex border border-zinc-300 bg-white">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`px-3 py-1.5 text-xs font-bold transition-colors ${
            locale === loc
              ? 'bg-brand-600 text-white'
              : 'text-zinc-600 hover:text-brand-700'
          }`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
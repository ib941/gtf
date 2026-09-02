import { getLocale } from 'next-intl/server';

export default async function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  const locale = await getLocale();
  return (
    <section className="relative border-b border-zinc-200 bg-zinc-50 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,166,81,0.05),rgba(255,255,255,0)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-4">
          <span className="h-[3px] w-12 bg-brand-600" />
          <p className={`text-sm font-bold text-brand-700 ${locale === 'en' ? 'uppercase tracking-[0.25em]' : ''}`}>
            {locale === 'ar' ? 'جرين ثيرم فيوتشر' : 'Green Therm Future'}
          </p>
        </div>
        <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
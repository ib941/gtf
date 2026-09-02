import { Building2, Factory, Landmark } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/PageHero';

export default async function SectorsPage() {
  const t = await getTranslations('Sectors');

  const sectors = [
    { icon: Landmark, titleKey: 'govTitle', descKey: 'govDesc' },
    { icon: Factory, titleKey: 'indTitle', descKey: 'indDesc' },
    { icon: Building2, titleKey: 'resTitle', descKey: 'resDesc' },
  ];

  return (
    <>
      <PageHero title={t('heroTitle')} subtitle={t('heroSub')} />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {sectors.map((s) => (
              <div key={s.titleKey} className="group border border-zinc-200 bg-white p-8 transition-all hover:border-brand-600 hover:shadow-lg md:p-10">
                <s.icon className="h-12 w-12 text-brand-600 transition-transform group-hover:scale-110" />
                <h3 className="mt-6 text-xl font-bold text-zinc-900">{t(s.titleKey)}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{t(s.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
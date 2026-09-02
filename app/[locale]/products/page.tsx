import { Download } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';
import Image from 'next/image';

const families = [
  { code: 'PP-R', nameKey: 'pprTitle', descKey: 'pprDesc', img: '/media/pipes.jpg' },
  { code: 'UPVC', nameKey: 'pvcTitle', descKey: 'pvcDesc', img: '/media/lab.jpg' },
  { code: 'MULTI+', nameKey: 'multiTitle', descKey: 'multiDesc', img: '/media/pipes.jpg' },
  { code: 'ELEC', nameKey: 'elecTitle', descKey: 'elecDesc', img: '/media/lab.jpg' },
];

export default async function ProductsPage() {
  const t = await getTranslations('Products');

  return (
    <>
      <PageHero title={t('heroTitle')} subtitle={t('heroSub')} />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {families.map((f) => (
              <div key={f.code} className="group overflow-hidden border border-zinc-200 bg-white transition-shadow hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
                  <Image src={f.img} alt={t(f.nameKey)} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute start-4 top-4 border border-white/80 bg-white/90 px-3 py-1 text-xs font-bold text-zinc-900 backdrop-blur" dir="ltr">
                    {f.code}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-zinc-900">{t(f.nameKey)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{t(f.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-4xl">{t('ctaTitle')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            {t('ctaSub')}
          </p>
          <a
            href={site.catalogPath}
            download
            className="mt-8 inline-flex items-center gap-3 bg-brand-600 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-500"
          >
            <Download className="h-5 w-5" />
            {t('ctaBtn')}
          </a>
        </div>
      </section>
    </>
  );
}
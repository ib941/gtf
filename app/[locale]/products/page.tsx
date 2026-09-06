import Image from 'next/image';
import { Download, ShieldCheck } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import CertificationsGrid from '@/components/CertificationsGrid';
import { site } from '@/lib/site';

interface ProductFamily {
  code: string;
  nameKey: string;
  descKey: string;
  img: string;
  secondaryImg?: string;
  badge: string;
}

const families: ProductFamily[] = [
  {
    code: 'PP-R',
    nameKey: 'pprTitle',
    descKey: 'pprDesc',
    img: '/media/ppr-products.jpg',
    badge: 'DIN 8077 / 8078 & SASO',
  },
  {
    code: 'UPVC',
    nameKey: 'pvcTitle',
    descKey: 'pvcDesc',
    img: '/media/upvc-fittings.jpg',
    secondaryImg: '/media/upvc-pipes.jpg',
    badge: 'SASO 14 & 15 / ISO 1452',
  },
  {
    code: 'CPVC',
    nameKey: 'cpvcTitle',
    descKey: 'cpvcDesc',
    img: '/media/cpvc-systems.jpg',
    badge: 'ASTM F441 / DIN Standards',
  },
  {
    code: 'ELEC',
    nameKey: 'elecTitle',
    descKey: 'elecDesc',
    img: '/media/conduits-stock.jpg',
    badge: 'SASO IEC 61386 / UV Resistant',
  },
];

export default async function ProductsPage() {
  const t = await getTranslations('Products');
  const locale = await getLocale();
  const isAr = locale === 'ar';

  return (
    <>
      <PageHero title={t('heroTitle')} subtitle={t('heroSub')} />

      {/* ============ PRODUCT FAMILIES ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {families.map((f) => (
              <div
                key={f.code}
                className="group overflow-hidden border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
                  {f.secondaryImg ? (
                    <div className="grid h-full w-full grid-cols-2 divide-x divide-zinc-200">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={f.img}
                          alt={t(f.nameKey)}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span
                          className="absolute bottom-2 start-2 z-10 inline-block transform-none border border-black/40 bg-zinc-950/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur select-none"
                          dir={isAr ? 'rtl' : 'ltr'}
                        >
                          {isAr ? 'القطع والتوصيلات' : 'Fittings'}
                        </span>
                      </div>
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={f.secondaryImg}
                          alt={`${t(f.nameKey)} - Pipes`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span
                          className="absolute bottom-2 start-2 z-10 inline-block transform-none border border-black/40 bg-zinc-950/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur select-none"
                          dir={isAr ? 'rtl' : 'ltr'}
                        >
                          {isAr ? 'الأنابيب' : 'Pipes'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={f.img}
                      alt={t(f.nameKey)}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div
                    className="absolute start-4 top-4 border border-white/80 bg-white/90 px-3 py-1 text-xs font-bold text-zinc-900 backdrop-blur"
                    dir="ltr"
                  >
                    {f.code}
                  </div>
                  <div
                    className="absolute bottom-4 end-4 border border-zinc-900/60 bg-zinc-950/80 px-2.5 py-1 text-[11px] font-mono text-white backdrop-blur"
                    dir="ltr"
                  >
                    {f.badge}
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

      {/* ============ SABER ACCREDITATIONS & CONFORMITY GRID ============ */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-brand-600" />
              <p
                className={`text-sm font-bold text-brand-700 ${
                  !isAr ? 'uppercase tracking-[0.25em]' : ''
                }`}
              >
                {isAr ? 'شهادات الاعتماد والمطابقة' : 'Product Accreditations'}
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-zinc-900 md:text-3xl">
              {t('certsTitle')}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600">
              {t('certsSub')}
            </p>
          </div>

          <CertificationsGrid locale={locale} />
        </div>
      </section>

      {/* ============ TECHNICAL CATALOG CTA ============ */}
      <section className="border-t border-zinc-200 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-zinc-800 bg-zinc-900 text-brand-400">
            <ShieldCheck className="h-7 w-7" />
          </div>
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
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { site, whatsappUrl } from '@/lib/site';

const standards = ['DIN 8077/8078', 'ISO 15874', 'SASO 1738', 'SASO 1739'];

const families = [
  { code: 'PP-R', name: 'famPpr', desc: 'famPprD' },
  { code: 'UPVC', name: 'famPvc', desc: 'famPvcD' },
  { code: 'MULTI+', name: 'famMulti', desc: 'famMultiD' },
  { code: 'ELEC', name: 'famElec', desc: 'famElecD' },
] as const;

const stats = [
  { v: 's1v', l: 's1l' },
  { v: 's2v', l: 's2l' },
  { v: 's3v', l: 's3l' },
  { v: 's4v', l: 's4l' },
] as const;

export default async function HomePage() {
  const t = await getTranslations('Home');
  const locale = await getLocale();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* ============ HERO VIDEO ============ */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-zinc-950 md:min-h-[640px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/pipes.jpg"
          src="/media/hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-zinc-950/30" />
        <div className="absolute inset-0 bg-brand-900/30 mix-blend-multiply" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24">
          <div className="flex items-center gap-4">
            <span className="h-[3px] w-12 bg-brand-400" />
            <p
              className={`text-sm font-bold text-brand-300 ${
                locale === 'en' ? 'uppercase tracking-[0.25em]' : ''
              }`}
            >
              {t('overline')}
            </p>
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.2] text-white md:text-5xl md:leading-[1.15] xl:text-6xl xl:leading-[1.1]">
            {t('heroTitle')}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-200 md:text-lg">
            {t('heroSubtitle')}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.catalogPath}
              download
              className="flex items-center gap-2.5 bg-brand-600 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-500"
            >
              <Download className="h-4 w-4" />
              {t('ctaCatalog')}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-white/40 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-brand-400 hover:text-brand-300"
            >
              {t('ctaWhatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="border-y border-zinc-200 bg-white">
        <div
          className={`mx-auto grid max-w-7xl grid-cols-2 divide-x divide-zinc-200 lg:grid-cols-4 ${
            locale === 'ar' ? 'divide-x-reverse' : ''
          }`}
        >
          {stats.map((s) => (
            <div key={s.v} className="px-6 py-8 md:px-8">
              <p className="text-3xl font-bold text-brand-700" dir="ltr">
                {t(s.v)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{t(s.l)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ STANDARDS ROW ============ */}
      <section className="bg-zinc-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5">
          <p className="text-xs font-bold text-zinc-600">{t('standardsTitle')}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1" dir="ltr">
            {standards.map((s) => (
              <li key={s} className="text-[11px] font-semibold tracking-wider text-zinc-400">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ PRODUCT FAMILIES ============ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-brand-600" />
              <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
                {t('familiesTitle')}
              </h2>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
            >
              {t('familiesCta')}
              <Arrow className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((f) => (
              <div key={f.code} className="bg-white p-6 lg:p-8">
                <span
                  className="inline-block border border-zinc-200 bg-zinc-50 px-2 py-1 text-[10px] font-bold text-zinc-500"
                  dir="ltr"
                >
                  {f.code}
                </span>
                <h3 className="mt-4 text-base font-bold text-zinc-900">{t(f.name)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{t(f.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TWO PHOTOS + ABOUT TEASER ============ */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-zinc-200 bg-white">
              <Image
                src="/media/pipes.jpg"
                alt={t('capPipes')}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <p className="absolute inset-x-0 bottom-0 bg-zinc-950/70 px-4 py-2 text-[11px] font-semibold text-white">
                {t('capPipes')}
              </p>
            </div>
            <div className="relative -mt-16 ms-auto aspect-square w-2/3 overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/media/lab.jpg"
                alt={t('capLab')}
                fill
                sizes="(max-width: 1024px) 66vw, 33vw"
                className="object-cover"
              />
              <p className="absolute inset-x-0 bottom-0 bg-zinc-950/70 px-4 py-2 text-[11px] font-semibold text-white">
                {t('capLab')}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-brand-600" />
              <p
                className={`text-sm font-bold text-brand-700 ${
                  locale === 'en' ? 'uppercase tracking-[0.25em]' : ''
                }`}
              >
                {t('aboutOverline')}
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">
              {t('aboutTitle')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg">
              {t('aboutText')}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2.5 border border-zinc-300 bg-white px-7 py-3.5 text-sm font-bold text-zinc-800 transition-colors hover:border-brand-600 hover:text-brand-700"
            >
              {t('aboutLink')}
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ GREEN CTA BAND ============ */}
      <section className="bg-gradient-to-l from-brand-800 via-brand-600 to-brand-500">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{t('bandTitle')}</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-7 py-3.5 text-sm font-bold text-brand-800 transition-colors hover:bg-brand-50"
            >
              {t('ctaWhatsapp')}
            </a>
            <a
              href={site.catalogPath}
              download
              className="flex items-center gap-2.5 border border-white/60 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              {t('ctaCatalog')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
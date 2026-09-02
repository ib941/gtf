import { Award, Eye, Target, ShieldCheck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import Image from 'next/image';

export default async function AboutPage() {
  const t = await getTranslations('About');

  const certs = [
    { icon: ShieldCheck, title: 'ISO 9001:2015', desc: t('iso9001') },
    { icon: Award, title: 'ISO 45001:2018', desc: t('iso45001') },
    { icon: Award, title: 'SABER CoC', desc: t('saber') },
    { icon: ShieldCheck, title: t('warrantyTitle'), desc: t('warrantyDesc') },
  ];

  return (
    <>
      <PageHero title={t('heroTitle')} subtitle={t('heroSub')} />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2">
          <div className="border border-zinc-200 p-8 md:p-10">
            <Eye className="h-8 w-8 text-brand-600" />
            <h2 className="mt-6 text-2xl font-bold text-zinc-900">{t('visionTitle')}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{t('visionText')}</p>
          </div>
          <div className="border border-zinc-200 p-8 md:p-10">
            <Target className="h-8 w-8 text-brand-600" />
            <h2 className="mt-6 text-2xl font-bold text-zinc-900">{t('missionTitle')}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{t('missionText')}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">{t('expertiseTitle')}</h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600">{t('expertiseText')}</p>
            <h3 className="mt-10 text-xl font-bold text-zinc-900">{t('qualityTitle')}</h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{t('qualityText')}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-zinc-200 bg-white shadow-sm">
            <Image src="/media/lab.jpg" alt="Quality Lab" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">{t('certsTitle')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">{t('certsSub')}</p>
          </div>

          <div className="mt-12 grid gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map((cert) => (
              <div key={cert.title} className="bg-white p-8 text-center">
                <cert.icon className="mx-auto h-10 w-10 text-brand-600" />
                <h3 className="mt-4 text-lg font-bold text-zinc-900" dir="ltr">{cert.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
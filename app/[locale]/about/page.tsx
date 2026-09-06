import Image from 'next/image';
import { Eye, Target, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import CertificationsGrid from '@/components/CertificationsGrid';

export default async function AboutPage() {
  const t = await getTranslations('About');
  const locale = await getLocale();
  const isAr = locale === 'ar';

  return (
    <>
      <PageHero title={t('heroTitle')} subtitle={t('heroSub')} />

      {/* ============ VISION & MISSION ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
          <div className="border border-zinc-200 bg-white p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-brand-200 bg-brand-50 text-brand-700">
                <Eye className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                {t('visionTitle')}
              </h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-zinc-600">
              {t('visionText')}
            </p>
          </div>

          <div className="border border-zinc-200 bg-white p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-brand-200 bg-brand-50 text-brand-700">
                <Target className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                {t('missionTitle')}
              </h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-zinc-600">
              {t('missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* ============ FACTORY & QUALITY SHOWCASE ============ */}
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
                {isAr ? 'البنية التحتية والتصنيع' : 'Manufacturing Infrastructure'}
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-zinc-900 md:text-3xl">
              {t('factoryTitle')}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600">
              {t('factorySub')}
            </p>
          </div>

          {/* MAIN FACTORY SHOWCASE: production-line.jpg */}
          <div className="border border-zinc-200 bg-white">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 md:aspect-[21/9]">
              <Image
                src="/media/production-line.jpg"
                alt="GTF Extrusion Production Line"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span
                  className="inline-block border border-white/30 bg-zinc-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur"
                  dir="ltr"
                >
                  EXTRUSION LINE #01 &mdash; MALHAM PLANT
                </span>
                <p className="mt-2 text-sm font-semibold text-zinc-200 md:text-base">
                  {t('productionLineDesc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 divide-y divide-zinc-200 border-t border-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-5">
                <span className="block text-xs font-semibold text-zinc-500">
                  {isAr ? 'موقع المنشأة' : 'Facility Location'}
                </span>
                <span className="mt-1 block font-mono text-sm font-bold text-zinc-900">
                  {isAr ? 'الملهم، الرياض، المملكة العربية السعودية' : 'Malham, Riyadh, KSA'}
                </span>
              </div>
              <div className="p-5">
                <span className="block text-xs font-semibold text-zinc-500">
                  {isAr ? 'التحكم الهيدروستاتيكي' : 'Process Control'}
                </span>
                <span className="mt-1 block font-mono text-sm font-bold text-zinc-900" dir="ltr">
                  Ultrasonic &amp; PID Auto-Calibrated
                </span>
              </div>
              <div className="p-5">
                <span className="block text-xs font-semibold text-zinc-500">
                  {isAr ? 'نطاق الأقطار المعيارية' : 'Standard Diameters'}
                </span>
                <span className="mt-1 block font-mono text-sm font-bold text-brand-700" dir="ltr">
                  Ø20 mm &mdash; Ø160 mm
                </span>
              </div>
            </div>
          </div>

          {/* TWO DEEP-DIVE CARDS: SABIC RAW MATERIALS & LAB */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* CARD 1: SABIC RAW MATERIALS */}
            <div className="border border-zinc-200 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <Image
                  src="/media/raw-materials.jpg"
                  alt="SABIC 100% Virgin Raw Materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute start-4 top-4">
                  <span className="border border-brand-600 bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                    {t('sabicCalloutBadge')}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-zinc-900">
                  {t('sabicCalloutTitle')}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {t('sabicCalloutText')}
                </p>
                <ul className="mt-5 space-y-2 border-t border-zinc-100 pt-4 text-xs font-medium text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'بوليمرات نقية معتمدة من سابك بدرجات مخصصة لشبكات الضغط العالي'
                        : 'Certified SABIC virgin polymer grades for high-pressure networks'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'خالية تماماً من المواد المعاد تدويرها (Zero Recycled Scrap)'
                        : '100% pure polymer with zero recycled regrind content'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'توافق صحي معتمد لمياه الشرب وخمول كيميائي تام'
                        : 'Full hygienic suitability for potable water networks'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD 2: LAB / DIE-HEAD TOOLING */}
            <div className="border border-zinc-200 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <Image
                  src="/media/lab.jpg"
                  alt="Precision Extrusion Head & Quality Control"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute start-4 top-4">
                  <span className="border border-zinc-900 bg-zinc-900 px-3 py-1 text-xs font-bold text-white">
                    {t('qualityLabBadge')}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-zinc-900">
                  {t('qualityLabTitle')}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {t('qualityLabText')}
                </p>
                <ul className="mt-5 space-y-2 border-t border-zinc-100 pt-4 text-xs font-medium text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'قوالب تشكيل من الفولاذ المقاوم للصدأ لضمان الاستدارة التامة'
                        : 'Stainless-steel die tooling ensuring exact circularity & wall uniformity'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'اختبارات هيدروستاتيكية واختبارات تمزق وانفجار لكل دفعة تصنيع'
                        : 'Continuous hydrostatic burst and tensile verification per batch'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'تتبع كامل لدفعات الإنتاج برقم كود طباعة ليزري مستمر على الأنبوب'
                        : 'Complete batch traceability with continuous laser-marked pipe coding'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OFFICIAL CERTIFICATIONS & SABER ACCREDITATIONS ============ */}
      <section className="border-t border-zinc-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-brand-600" />
              <p
                className={`text-sm font-bold text-brand-700 ${
                  !isAr ? 'uppercase tracking-[0.25em]' : ''
                }`}
              >
                {isAr ? 'المطابقة والتراخيص الرسمية' : 'Official Accreditations'}
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

          {/* 50-YEAR WARRANTY BANNER */}
          <div className="mt-10 border border-brand-200 bg-brand-50/50 p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-600 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {t('warrantyTitle')}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {t('warrantyDesc')}
                  </p>
                </div>
              </div>
              <span
                dir="ltr"
                className="inline-flex self-start border border-brand-600 bg-white px-4 py-2 font-mono text-xs font-bold text-brand-700 sm:self-auto"
              >
                50-YEAR PRODUCT WARRANTY
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
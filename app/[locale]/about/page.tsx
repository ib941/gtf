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

          {/* FACILITY CAPABILITY STRIP */}
          <div
            className={`grid grid-cols-2 divide-x divide-y divide-zinc-200 border border-zinc-200 bg-white sm:grid-cols-4 sm:divide-y-0 ${
              isAr ? 'divide-x-reverse' : ''
            }`}
          >
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
            <div className="p-5">
              <span className="block text-xs font-semibold text-zinc-500">
                {isAr ? 'معايير الاعتماد' : 'Accreditations'}
              </span>
              <span className="mt-1 block font-mono text-sm font-bold text-zinc-900" dir="ltr">
                SASO &bull; SABER &bull; ISO 9001
              </span>
            </div>
          </div>

          {/* 4-PILLAR SHARP INDUSTRIAL GRID */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* PILLAR 1: MAIN MANUFACTURING / EXTRUSION */}
            <div className="flex flex-col border border-zinc-200 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src="/media/production-line.jpg"
                  alt="GTF Extrusion Production Line"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute start-4 top-4">
                  <span
                    className="border border-white/30 bg-zinc-950/80 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur"
                    dir="ltr"
                  >
                    EXTRUSION LINE #01
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-brand-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                      {t('productionLineBadge')}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    {t('productionLineTitle')}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {t('productionLineDesc')}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-5 text-xs font-medium text-zinc-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'مراقبة آلية مستمرة لسماكة الجدار بالموجات فوق الصوتية'
                        : 'Ultrasonic wall thickness monitoring & PID temperature control'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'تغطية شاملة لجميع الأقطار الهندسية من Ø20 مم حتى Ø160 مم'
                        : 'Comprehensive dimensional range covering Ø20 mm through Ø160 mm'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'معايرة تفريغية وتبريد مائي متزامن لمنع الإجهاد الحراري'
                        : 'Vacuum calibration and dual cooling baths eliminating thermal stress'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PILLAR 2: QUALITY CONTROL & PRECISION TOOLING */}
            <div className="flex flex-col border border-zinc-200 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src="/media/lab-tooling.jpg"
                  alt="Precision Tooling & Quality Laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute start-4 top-4">
                  <span
                    className="border border-white/30 bg-zinc-950/80 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur"
                    dir="ltr"
                  >
                    QUALITY CONTROL &bull; LAB
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-brand-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                      {t('qualityLabBadge')}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    {t('qualityLabTitle')}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {t('qualityLabText')}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-5 text-xs font-medium text-zinc-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'قوالب تشكيل من الفولاذ المقاوم للصدأ لضمان الاستدارة التامة وتجانس السطح'
                        : 'Stainless-steel die tooling ensuring exact circularity & wall uniformity'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'اختبارات هيدروستاتيكية واختبارات تمزق وانفجار لكل دفعة تصنيع'
                        : 'Continuous hydrostatic burst and tensile verification per production batch'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
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

            {/* PILLAR 3: RAW MATERIALS (SABIC GUARANTEE) */}
            <div className="flex flex-col border border-zinc-200 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src="/media/raw-materials.jpg"
                  alt="SABIC 100% Virgin Raw Materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute start-4 top-4">
                  <span className="border border-brand-600 bg-brand-600 px-3 py-1 font-mono text-xs font-bold text-white">
                    100% VIRGIN SABIC
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-brand-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                      {t('sabicCalloutBadge')}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    {t('sabicCalloutTitle')}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {t('sabicCalloutText')}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-5 text-xs font-medium text-zinc-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'بوليمرات نقية معتمدة من سابك بدرجات مخصصة لشبكات الضغط العالي'
                        : 'Certified SABIC virgin polymer grades for high-pressure networks'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'خالية تماماً من المواد المعاد تدويرها (Zero Recycled Regrind Scrap)'
                        : '100% pure polymer with zero recycled regrind content'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'توافق صحي معتمد لمياه الشرب وخمول كيميائي تام ضد الرواسب والتآكل'
                        : 'Full hygienic suitability for potable water networks and scale immunity'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PILLAR 4: SUPPLY CHAIN & FACILITY SCALE */}
            <div className="flex flex-col border border-zinc-200 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src="/media/warehouse.jpg"
                  alt="Warehouse and Strategic Supply Chain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute start-4 top-4">
                  <span
                    className="border border-white/30 bg-zinc-950/80 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur"
                    dir="ltr"
                  >
                    CENTRAL LOGISTICS HUB
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-brand-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                      {t('warehouseBadge')}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    {t('warehouseTitle')}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {t('warehouseText')}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-5 text-xs font-medium text-zinc-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'طاقة استيعابية مظللة تحمي الأنابيب والقطع من العوامل الجوية والأشعة'
                        : 'High-capacity covered storage preserving products from weathering and UV'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'جاهزية توريد فوري ومخزون استراتيجي دائم لكبرى مشروعات البنية التحتية'
                        : 'Immediate fulfillment readiness maintaining continuous supply for mega works'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      {isAr
                        ? 'إدارة لوجستية متطورة تغطي كافة مدن ومناطق المملكة العربية السعودية'
                        : 'Integrated nationwide distribution fleet covering all regions across KSA'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECONDARY INDUSTRIAL GALLERY STRIP */}
          <div className="mt-12 border-t border-zinc-200 pt-10">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-700">
                {isAr ? 'مراحل خطوط الإنتاج والمعايرة' : 'Production & Calibration Processes'}
              </h4>
              <span className="text-xs font-mono text-zinc-400">GTF-PLANT-01</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="transform-none border border-zinc-200 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <Image
                    src="/media/calibration-line.jpg"
                    alt="Calibration line"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4" dir={isAr ? 'rtl' : 'ltr'}>
                  <p className="text-xs font-bold text-zinc-900">
                    {isAr ? 'أحواض المعايرة والتبريد الفراغي' : 'Vacuum Calibration & Cooling Tanks'}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">
                    {isAr ? 'تثبيت الأبعاد الهندسية ومنع الانكماش الحراري' : 'Dimensional stabilizing and uniform cooling'}
                  </p>
                </div>
              </div>

              <div className="transform-none border border-zinc-200 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <Image
                    src="/media/conduit-extrusion.jpg"
                    alt="Conduit extrusion line"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4" dir={isAr ? 'rtl' : 'ltr'}>
                  <p className="text-xs font-bold text-zinc-900">
                    {isAr ? 'بثق المواسير الكهربائية' : 'Conduit Extrusion Process'}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">
                    {isAr ? 'خطوط إنتاج مستمرة مع وسم المواصفات الدقيق' : 'High-capacity extrusion with precision laser marking'}
                  </p>
                </div>
              </div>

              <div className="transform-none border border-zinc-200 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <Image
                    src="/media/pipes-alt.jpg"
                    alt="Pipes stacking and inspection"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4" dir={isAr ? 'rtl' : 'ltr'}>
                  <p className="text-xs font-bold text-zinc-900">
                    {isAr ? 'فحص ومطابقة حزم الأنابيب' : 'Pipe Stacking & Batch Inspection'}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">
                    {isAr ? 'تجهيز وحزم معيارية قبل النقل إلى المستودعات' : 'Standard bundling and safety packaging for dispatch'}
                  </p>
                </div>
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
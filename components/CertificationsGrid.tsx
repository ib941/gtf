import { certifications } from '@/lib/site';

interface CertificationsGridProps {
  locale: string;
}

export default function CertificationsGrid({ locale }: CertificationsGridProps) {
  const isAr = locale === 'ar';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-zinc-200 bg-zinc-200">
      {certifications.map((cert) => {
        const isSaber = cert.authority.includes('SABER');

        return (
          <div
            key={cert.id}
            className="bg-white p-6 rounded-none flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-3">
                <span
                  dir="ltr"
                  className={`text-xs px-2.5 py-1 inline-flex items-center gap-1.5 ${
                    isSaber
                      ? 'text-brand-600 font-bold bg-brand-50 border border-brand-200'
                      : 'text-zinc-700 font-semibold bg-zinc-100 border border-zinc-200'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isSaber ? 'bg-brand-600' : 'bg-zinc-500'
                    }`}
                  />
                  {cert.authority}
                </span>

                <span
                  dir="ltr"
                  className="font-mono text-[11px] text-zinc-500 font-medium"
                >
                  {cert.validUntil === 'Active'
                    ? isAr
                      ? 'ساري'
                      : 'Active'
                    : `${isAr ? 'صالح حتى' : 'Exp'}: ${cert.validUntil}`}
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-zinc-900 leading-snug">
                {isAr ? cert.nameAr : cert.nameEn}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                {cert.standard}
              </p>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-zinc-500">
                  {isAr ? 'رقم المطابقة / الاعتماد:' : 'Certificate / CoC No.'}
                </span>
                <span
                  dir="ltr"
                  className="font-mono text-xs font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 px-2.5 py-1 select-all"
                >
                  {cert.certNo}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

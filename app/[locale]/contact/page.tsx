import { Mail, MapPin, Phone, FileText, MessageCircle } from 'lucide-react';
import { getTranslations, getLocale } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import { site, whatsappUrl } from '@/lib/site';

export default async function ContactPage() {
  const t = await getTranslations('Contact');
  const locale = await getLocale();

  return (
    <>
      <PageHero title={t('heroTitle')} subtitle={t('heroSub')} />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="border-s-4 border-brand-600 bg-zinc-50 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-zinc-900">{t('mgmtTitle')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-700">
              {t('mgmtText')}
            </p>
            <p className="mt-8 text-sm font-bold text-zinc-900">
              — {t('mgmtSign')}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">{t('infoTitle')}</h2>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <p className="font-bold text-zinc-900">{t('addressLabel')}</p>
                  <p className="mt-1 text-zinc-600">{locale === 'ar' ? site.addressAr : site.addressEn}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <p className="font-bold text-zinc-900">{t('phonesLabel')}</p>
                  <div className="mt-1 space-y-1">
                    {site.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} dir="ltr" className="block text-zinc-600 hover:text-brand-600">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <p className="font-bold text-zinc-900">{t('emailsLabel')}</p>
                  <div className="mt-1 space-y-1">
                    {site.emails.map((e) => (
                      <a key={e} href={`mailto:${e}`} className="block text-zinc-600 hover:text-brand-600">{e}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#20BD5A]"
            >
              <MessageCircle className="h-5 w-5" />
              {t('whatsappBtn')}
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900">{t('legalTitle')}</h2>
            <div className="mt-8 space-y-4 border border-zinc-200 bg-white p-8">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <span className="flex items-center gap-2 text-sm font-bold text-zinc-500">
                  <FileText className="h-4 w-4" /> {t('crLabel')}
                </span>
                <span className="text-sm font-bold text-zinc-900" dir="ltr">{site.crNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-bold text-zinc-500">
                  <FileText className="h-4 w-4" /> {t('vatLabel')}
                </span>
                <span className="text-sm font-bold text-zinc-900" dir="ltr">{site.vatNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
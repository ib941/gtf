import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { site } from '@/lib/site';

export default function TopBar() {
  const t = useTranslations();

  return (
    <div className="bg-brand-800 text-brand-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] md:text-xs">
        <p className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {t('Footer.address')}
        </p>
        <div className="hidden items-center gap-5 sm:flex">
          {site.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              dir="ltr"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
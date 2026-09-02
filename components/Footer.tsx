import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { site } from '@/lib/site';

const links = [
  { href: '/', key: 'home' },
  { href: '/products', key: 'products' },
  { href: '/about', key: 'about' },
  { href: '/sectors', key: 'sectors' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={t('Brand.name')}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white p-1"
            />
            <div className="leading-tight">
              <p className="font-bold text-white">{t('Brand.name')}</p>
              <p className="text-xs text-zinc-400">{t('Brand.tagline')}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">{t('Footer.about')}</p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            {t('Footer.quickLinks')}
          </h3>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-brand-400"
                >
                  {t(`Navbar.${link.key}`)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.catalogPath}
                download
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-brand-400"
              >
                <Download className="h-3.5 w-3.5" />
                {t('Footer.catalog')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            {t('Footer.contactTitle')}
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span className="text-zinc-400">{t('Footer.address')}</span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href={`tel:${phone}`}
                  dir="ltr"
                  className="text-zinc-400 transition-colors hover:text-brand-400"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" />
              <a
                href={`mailto:${site.email}`}
                className="text-zinc-400 transition-colors hover:text-brand-400"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-zinc-500">
          © {year} {t('Brand.name')} — {t('Footer.rights')}
        </p>
      </div>
    </footer>
  );
}
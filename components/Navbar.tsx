'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { site, whatsappUrl } from '@/lib/site';
import LanguageSwitcher from './LanguageSwitcher';
import TopBar from './TopBar';

const items = [
  { href: '/', key: 'home' },
  { href: '/products', key: 'products' },
  { href: '/about', key: 'about' },
  { href: '/sectors', key: 'sectors' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt={t('Brand.name')}
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
            <span className="leading-tight">
              <span className="block text-sm font-bold text-brand-700 md:text-base">
                {t('Brand.name')}
              </span>
              <span className="block text-[11px] text-zinc-500">
                {t('Brand.tagline')}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-bold transition-colors xl:text-sm ${
                  pathname === item.href
                    ? 'text-brand-600'
                    : 'text-zinc-600 hover:text-brand-600'
                }`}
              >
                {t(`Navbar.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={site.catalogPath}
              download
              className="hidden items-center gap-2 bg-brand-600 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-700 lg:flex"
            >
              <Download className="h-4 w-4" />
              {t('Navbar.catalog')}
            </a>
            <button
              className="grid h-10 w-10 place-items-center border border-zinc-300 text-zinc-700 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-zinc-200 bg-white lg:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 text-sm font-bold ${
                      pathname === item.href
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-zinc-700 hover:bg-zinc-50'
                    }`}
                  >
                    {t(`Navbar.${item.key}`)}
                  </Link>
                ))}
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <a
                    href={site.catalogPath}
                    download
                    className="flex items-center justify-center gap-2 bg-brand-600 px-4 py-3 text-xs font-bold text-white"
                  >
                    <Download className="h-4 w-4" />
                    {t('Navbar.catalog')}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-zinc-300 px-4 py-3 text-xs font-bold text-zinc-800"
                  >
                    {t('Navbar.contact')}
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
'use client';

import { useRouter, usePathname } from '@/i18n/routing';

export default function IntlButton({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(`locale: ${locale}`);
  console.log(`pathname: ${pathname}`);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh-TW' : 'en';
    console.log(`newLocale: ${newLocale}`);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
    >
      {locale === 'en' ? '切換到中文' : 'Switch to English'}
    </button>
  );
}

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
  };
}

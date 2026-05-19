import { Inter, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import AnalyticsScripts from '../src/components/AnalyticsScripts.jsx';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: '洋サポ | オリシャン事業導入サービス',
  description: '在庫を持たず、制作・印刷・発送を任せてスムーズに始められるオリシャン事業導入サービスのLP',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable}`}>
      <body>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}

import AnalyticsScripts from '../src/components/AnalyticsScripts.jsx';
import './globals.css';

export const metadata = {
  title: '洋サポ | オリシャン事業導入サービス',
  description: '在庫を持たず、制作・印刷・発送を任せてスムーズに始められるオリシャン事業導入サービスのLP',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Noto+Sans+JP:wght@400;500;600;700&family=Noto+Serif+JP:wght@600;700&family=Shippori+Mincho+B1:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}

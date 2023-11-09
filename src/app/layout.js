import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.scss';
import { getMenus } from '@/service/menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '우정사업본부',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  const menus = await getMenus();

  return (
    <html lang="ko">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <body>
        <Header menus={menus} />
        <main id="main" className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

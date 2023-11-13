'use client';
import Container from '@/components/Container';
import SideNav from '@/components/SideNav';
import SubHeader from '@/components/SubHeader';
import { usePathname } from 'next/navigation';

export default function AboutLayout({ children }) {
  const pathname = usePathname();
  console.log('pathname: ', pathname);

  return (
    <>
      <SubHeader />
      <section className="page-container">
        <SideNav url={pathname} />
        <Container>{children}</Container>
      </section>
    </>
  );
}

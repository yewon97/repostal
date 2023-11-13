import Container from '@/components/Container';
import SideNav from '@/components/SideNav';
import SubHeader from '@/components/SubHeader';

export default function NewsLayout({ children }) {
  return (
    <>
      <SubHeader />
      <section className="page-container">
        <SideNav />
        <Container>{children}</Container>
      </section>
    </>
  );
}

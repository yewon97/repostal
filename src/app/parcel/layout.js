import Container from '@/components/Container';
import SideNav from '@/components/SideNav';
import SubHeader from '@/components/SubHeader';

export default function AboutLayout({ children }) {
  return (
    <>
      <SubHeader />
      <section class="page-container">
        <SideNav />
        <Container>{children}</Container>
      </section>
    </>
  );
}
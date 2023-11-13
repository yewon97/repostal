import Container from '@/components/Container';
import SideNav from '@/components/SideNav';
import SubHeader from '@/components/SubHeader';
import { getAllMenu } from '@/service/menu';

export default async function NewsLayout({ children }) {
  const menu = await getAllMenu();

  return (
    <>
      <SubHeader />
      <section className="page-container">
        <Container>{children}</Container>
      </section>
    </>
  );
}

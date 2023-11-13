import Container from '@/components/Container';
import SideNav from '@/components/SideNav';
import SubHeader from '@/components/SubHeader';
import { getAllMenu } from '@/service/menu';

export default async function ParcelLayout({ children }) {
  const menu = await getAllMenu();

  return (
    <>
      <SubHeader />
      <section className="page-container">
        <SideNav menu={menu[3]} />
        <Container>{children}</Container>
      </section>
    </>
  );
}

import Container from '@/components/Container';
import SideNav from '@/components/SideNav';
import SubHeader from '@/components/SubHeader';
import { getAllMenu } from '@/service/menu';

export default async function SubLayout({ children }) {
  const menu = await getAllMenu();

  return (
    <>
      <SubHeader title={menu[3].gnb} />
      <section className="page-container">
        <SideNav menu={menu[3]} />
        <Container>{children}</Container>
      </section>
    </>
  );
}

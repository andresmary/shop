import { ReactNode } from 'react';
import SearchBox from './SearchBox';
import Footer from './Footer';

export type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <SearchBox />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;

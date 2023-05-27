import MainMenu from '@/components/main-menu';
import '@/styles/globals.css';
import { Helmet, Outlet } from 'umi';

export default function Layout() {
  return (
    <div className="flex h-full flex-row">
      <Helmet>
        <title>YardPassword</title>
      </Helmet>
      <div className="h-full w-[320px] flex-none mr-[48px]">
        <MainMenu />
      </div>
      <div className="w-full h-full flex-1 pt-[32px]">
        <Outlet />
      </div>
    </div>
  );
}

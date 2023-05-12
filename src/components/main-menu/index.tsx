import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: <Link href="/">主页</Link>,
    key: 'main-page',
  },
  {
    label: <Link href="/password-generator">密码生成</Link>,
    key: 'password-generator',
  },
];

export default function MainMenu() {
  return <Menu mode="inline" items={items} />;
}
